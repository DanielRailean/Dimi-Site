export const addCopyButton = () => {
    const svgClasses = 'w-5 h-5 bg-gray-50 dark:bg-stone-900 cursor-pointer'
    const copySvg = `<svg class="${svgClasses}"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="8" width="12" height="12" rx="2" />  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></svg>`;
    const checkSvg = `<svg class="${svgClasses}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  rx="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>`;

    const codes = document.getElementsByTagName('pre');
    for (const codeBlock of codes) {
        // skip if a copy button exists
        if (codeBlock.getElementsByTagName('div').length > 0) continue;

        codeBlock.className = codeBlock.className + ' relative flex flex-row justify-between ';

        let copyContainer = document.createElement('div');
        copyContainer.className = 'sticky z-10 top-0 right-0 flex flex-row ';
        let copyButton = document.createElement('div');
        copyContainer.append(copyButton);

        // on copy click
        copyButton.addEventListener('click', () => {
            copyButton.innerHTML = checkSvg;
            setTimeout(() => {
                copyButton.innerHTML = copySvg;
            }, 1000);
            navigator.clipboard.writeText(codeBlock.innerText);
        });

        copyButton.innerHTML = copySvg;
        codeBlock.appendChild(copyContainer);
    }
}