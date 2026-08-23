const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/subra/OneDrive/Documents/Portfolio/src';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir).filter(f => f.endsWith('.css') || f.endsWith('.js') || f.endsWith('.jsx'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let newContent = content
        .replace(/#6366f1/gi, '#FFD700')
        .replace(/rgba\(99,\s*102,\s*241/g, 'rgba(255, 215, 0')

        .replace(/#8b5cf6/gi, '#DAA520')
        .replace(/rgba\(139,\s*92,\s*246/g, 'rgba(218, 165, 32')

        .replace(/#38bdf8/gi, '#FFC125')

        .replace(/#060810/gi, '#000000')
        .replace(/#0c1018/gi, '#0a0a0a')
        .replace(/#101520/gi, '#151515')
        .replace(/#0f131c/gi, '#121212')

        .replace(/rgba\(15,\s*19,\s*28/g, 'rgba(20, 20, 20')

        // variable renaming for css just to be semantically correct
        .replace(/var\(--color-indigo\)/g, 'var(--color-indigo)') // keep var name same so we don't break JS
        .replace(/var\(--color-violet\)/g, 'var(--color-violet)');

    // In App.jsx, I noticed hardcoded background colors like "#060810", these were handled by regex above.

    if (newContent !== content) {
        fs.writeFileSync(f, newContent, 'utf8');
        console.log('Updated', f);
    }
});
