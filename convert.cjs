const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'stitch_orbit_softworks_website_design');
const pagesDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

function convertHtmlToJsx(htmlStr) {
    let bodyMatch = htmlStr.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let innerHtml = bodyMatch ? bodyMatch[1] : htmlStr;
    
    // Remove scripts
    innerHtml = innerHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove Navbar and Footer since they are in Layout
    innerHtml = innerHtml.replace(/<nav[^>]*>([\s\S]*?)<\/nav>/gi, '');
    innerHtml = innerHtml.replace(/<footer[^>]*>([\s\S]*?)<\/footer>/gi, '');
    innerHtml = innerHtml.replace(/<div class="scanline-overlay"><\/div>/gi, '');
    
    let jsx = innerHtml
        .replace(/class=/g, 'className=')
        .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
        .replace(/<img([^>]+)>/g, (match, p1) => {
            if(p1.trim().endsWith('/')) return match;
            return `<img${p1} />`;
        })
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        .replace(/<input([^>]+)>/g, (match, p1) => {
            if(p1.trim().endsWith('/')) return match;
            return `<input${p1} />`;
        })
        .replace(/style="([^"]*)"/g, (match, p1) => {
            // Basic style to object conversion
            const styleObj = p1.split(';').reduce((acc, rule) => {
                const parts = rule.split(':');
                if (parts.length === 2) {
                    const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                    acc.push(`${key}: '${parts[1].trim().replace(/'/g, '"')}'`);
                }
                return acc;
            }, []).join(', ');
            return `style={{ ${styleObj} }}`;
        })
        // Fix some stray svg issues if any
        .replace(/viewBox/g, 'viewBox')
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/stroke-dasharray/g, 'strokeDasharray')
        .replace(/stop-color/g, 'stopColor')
        .replace(/gradientUnits/g, 'gradientUnits')
        .replace(/<linearGradient/gi, '<linearGradient')
        .replace(/<\/linearGradient>/gi, '</linearGradient>')
        .replace(/<path([^>]+)>/gi, (match, p1) => {
            if(p1.trim().endsWith('/')) return match;
            return `<path${p1} />`;
        });

    return `const Page = () => {\n  return (\n    <>\n${jsx}\n    </>\n  );\n};\n\nexport default Page;`;
}

const pagesMap = {
    'home_page_orbit_softworks_1': 'Home',
    'about_us_orbit_softworks': 'About',
    'contact_us_orbit_softworks': 'Contact',
    'industries_orbit_softworks': 'Industries',
    'services_orbit_softworks': 'Services'
};

for (const [folder, pageName] of Object.entries(pagesMap)) {
    const htmlFile = path.join(sourceDir, folder, 'code.html');
    if (fs.existsSync(htmlFile)) {
        console.log(`Processing ${folder}...`);
        const html = fs.readFileSync(htmlFile, 'utf8');
        const jsx = convertHtmlToJsx(html);
        fs.writeFileSync(path.join(pagesDir, `${pageName}.jsx`), jsx);
    } else {
        console.warn(`File not found: ${htmlFile}`);
    }
}

console.log("Conversion complete.");
