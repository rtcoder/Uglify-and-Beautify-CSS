function BeautifyCSS() {
    var css = document.getElementById('source').value
            .replace(/\}/g,"\n}\n")
            .replace(/\;\}/g,";\n}\n")
            .replace(/;/g, ";\n\t")
            .replace(/\}/g,"}\n")
            .replace(/\{/g,"{\n\t")
            .replace(/,/g, ', ')
            .replace(/\n\t\n/g, "\n")
            .replace(/\n\t\*\//g, "\*\/")
            .replace(/\n\s\*\//g, "\*\/")
            .replace(/\*\//g, "\*\/\n")
            .replace(/\t\*/g, "\*")
            .replace(/\*/g, "\n\*")
            .replace(/\/\n\*/g, "\/\*")
            .replace(/\n\n/g, "\n")
            .replace(/\}\n\n\}/g, "\t\}\n\}")

    document.getElementById('source').value = css;
}
