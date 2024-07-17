export const colorizedCodeSnippet = (snippet: string): string => {
    let editedSnippet = snippet
        .replaceAll('<p>', `<span class="purple">`)
        .replaceAll('</p>', `</span>`)
        .replaceAll('<o>', `<span class="orange">`)
        .replaceAll('</o>', `</span>`)
        .replaceAll('<gr>', `<span class="gray">`)
        .replaceAll('</gr>', `</span>`)
        .replaceAll('<lgr>', `<span class="lightgray">`)
        .replaceAll('</lgr>', `</span>`)
        .replaceAll('<b>', `<span class="blue">`)
        .replaceAll('</b>', `</span>`)
        .replaceAll('<r>', `<span class="red">`)
        .replaceAll('</r>', `</span>`)
        .replaceAll('<g>', `<span class="green">`)
        .replaceAll('</g>', `</span>`)
        .replaceAll('<y>', `<span class="yellow">`)
        .replaceAll('</y>', `</span>`)

    return editedSnippet;
};