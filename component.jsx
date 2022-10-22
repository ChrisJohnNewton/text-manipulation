import SkipLink from '../Components/SkipLink.js';
import Sidebar from '../Components/Sidebar.js';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import CodeLink from '../Components/CodeLink.js';

const TextManipulator = () => {

    return (
      <>
        <SkipLink />
        <Sidebar />
        <div id="chris" className="min-h-screen bg-quaternary">
          <Header />
          <main id="main" className="w-10/12 mx-auto pt-[150px] m:pb-20 d:pb-32 text-secondary">
            <article className="contain-width d:grid d:[grid-template-areas:'links']">
              <header>
                <h1 className="mt-6 m:text-4xl d:text-5xl font-bold">Text Manipulator Tool</h1>
              </header>
              <p className="py-4 text-xl">Select which text manipulation you'd like to use, and then input your text below.</p>
              <div id="manipulation" className="m:w-full d:w-1/2 p-4 mt-4 border-2 border-secondary rounded grid grid-cols-1 justify-between">
                <fieldset className="relative p-0 m-0 grid gap-y-5 border-none">
                  <div className="relative w-full">
                    <select id="manipulation-select" className="w-full h-9 pl-4 pr-11 rounded bg-secondary text-white appearance-none [outline-style:none] cursor-pointer" name="manipulation-choice">
                      <option value="Search &amp; Replace" selected={true}>Search &amp; Replace</option>
                      <option value="Add Line Numbers">Add Line Numbers</option>
                      <option value="To Lowercase">To Lowercase</option>
                      <option value="To Uppercase">To Uppercase</option>
                      <option value="To Upper First Case">To Upper First Case</option>
                      <option value="To Title Case">To Title Case</option>
                    </select>
                    <span className="before:content-[''] before:absolute before:top-1 before:w-0 before:h-0 before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-quaternary after:content-[''] after:absolute after:bottom-1 after:w-0 after:h-0 after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-quaternary absolute right-0 top-0 w-9 h-9 rounded flex justify-center pointer-events-none shadow-[inset_1px_1px_1px_0_rgb(255_249_240/50%),_inset_2px_-2px_2px_0_rgb(255_249_240/50%)]"></span>
                  </div>
                  <label id="search-term-label" className="flex items-center justify-between">
                    Search Term: 
                    <input id="search-term-input" className="focus:bg-tertiary h-9 pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" size="15" type="text" autoCapitalize="off"></input>
                  </label>
                  <label id="replace-term-label" className="flex items-center justify-between">
                    Replace Term:
                    <input id="replace-term-input" className="focus:bg-tertiary h-9 pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" size="15" type="text" autoCapitalize="off"></input>
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="mr-4">Case-sensitive</span>
                    <input id="manipulation-sensitivity" className="peer w-0 h-0 invisible" name="text-manipulation-sensitivity" type="checkbox"></input>
                    <label htmlFor="manipulation-sensitivity" className="peer-active:after:w-11 peer-checked:after:[transform:translate(-100%,50%)] peer-checked:after:left-[calc(100%_-_2px)] peer-checked:bg-tertiary after:content-[''] after:absolute after:bottom-1/2 after:[transform:translate(0%,50%)] after:left-0.5 after:w-7 after:h-7 after:rounded-full after:bg-secondary after:[transition-property:width,_left,_transform] after:duration-300 relative w-[68px] h-9 border-2 border-secondary rounded-full block bg-white -indent-[9999px] [transition-property:background-color] duration-500 cursor-pointer">Toggle</label>
                    <span className="ml-4">Case-insensitive</span>
                  </div>
                  <textarea id="manipulation-input" className="h-28 p-2.5 border-2 border-secondary rounded outline-none bg-white placeholder-secondary resize-none" placeholder="Input your text here…" spellCheck="true" autoCapitalize="off" lang="en" aria-label="Input"></textarea>
                  <textarea id="manipulation-output" className="h-28 p-2.5 border-2 border-secondary rounded outline-none bg-white resize-none" readOnly={true} aria-label="Output" defaultValue="Your output will appear here…"></textarea>
                  <div className="absolute bottom-0.5 right-3.5 w-fit">
                    <button id="copy" className="before:content-[attr(data-tooltip)] before:absolute before:bottom-12 before:left-1/2 before:[transform:translateX(-50%)] before:w-fit before:h-6 before:px-2.5 before:rounded before:bg-primary before:leading-6 before:text-sm before:cursor-default before:pointer-events-none before:[transition-property:opacity] before:duration-500 after:absolute after:content-[''] after:bottom-10 after:left-1/2 after:[transform:translateX(-50%)] after:border-4 after:border-x-transparent after:border-t-primary after:border-b-transparent after:cursor-default after:pointer-events-none after:[transition-property:opacity] after:duration-500 outline-none bg-transparent" type="button" data-tooltip="Copied" aria-label="Copy the output to the clipboard">
                      <svg width="23" viewBox="0 0 20 32">
                        <path className="[transition-property:fill] duration-300" fill="rgb(var(--colour-secondary))" d="M15.2 32q-.05 0-.1-.04-.03-.04-.03-.1v-.05l.03-.06.51-1.22-1.27-3.01-.03-.11q0-.06.04-.1.04-.04.1-.04h.32q.08 0 .11.03.04.03.05.08l1.02 2.43 1.04-2.43.05-.08q.04-.03.11-.03h.32q.06 0 .1.04.04.04.04.09l-.04.12-1.89 4.37-.06.08q-.03.03-.1.03zm-4.29 0q-.06 0-.11-.05-.04-.04-.04-.1v-4.43q0-.07.04-.1.05-.05.11-.05h.31q.07 0 .1.04.05.04.05.11v.3q.16-.23.43-.37.27-.15.67-.15.37 0 .63.13.27.12.43.34.18.22.26.5.09.28.1.6l.01.23v.23q-.02.31-.1.6-.1.28-.27.5-.16.21-.43.34-.26.13-.63.13-.39 0-.66-.14-.26-.15-.42-.36v1.55q0 .06-.04.1-.04.05-.11.05zm1.42-1.74q.34 0 .54-.15t.28-.39q.09-.25.1-.53v-.38q-.01-.28-.1-.52-.08-.25-.28-.4-.2-.15-.54-.15-.33 0-.54.15-.2.16-.3.4-.09.23-.1.48l-.01.25v.26q.01.23.11.46.11.23.32.37.2.15.52.15zm-3.98.54q-.51 0-.85-.2-.34-.19-.52-.53t-.2-.78v-.58q.02-.44.2-.78.19-.34.53-.54.34-.19.84-.19.5 0 .84.2.34.19.52.53t.2.78v.58q-.02.44-.2.78-.18.34-.52.54-.34.19-.84.19zm0-.51q.4 0 .66-.26.24-.27.26-.78v-.5q-.02-.51-.26-.77-.25-.27-.66-.27-.42 0-.67.27-.25.26-.26.77v.5q.01.51.26.78.25.26.67.26zm-4.1.51q-.61 0-1.02-.23-.4-.22-.6-.63-.21-.4-.23-.95v-1.18q.02-.54.23-.95.2-.4.6-.63.4-.23 1.02-.23.46 0 .8.13.36.12.58.34.24.21.36.48.12.26.13.54 0 .06-.04.1-.04.04-.1.04H5.6q-.06 0-.1-.04-.04-.03-.06-.12-.12-.52-.43-.71-.3-.2-.77-.2-.54 0-.85.31-.31.3-.33.97-.02.55 0 1.12.02.67.33.97.31.3.85.3.46 0 .77-.19.31-.2.43-.71.02-.09.06-.12.04-.04.1-.04h.37q.06 0 .1.04.05.04.04.1-.01.28-.13.54-.12.27-.36.48-.22.22-.57.34-.35.13-.8.13zM20 2v22H0V2h3C4.23 2 5.18.92 6 0h8c.82.92 1.77 2 3 2zM9 3a1 1 0 102 0 1 1 0 00-2 0zm9 1h-4l-2 2H8.1L6 4H2v18h16zM5 13.73l.86-.8c1 .5 1.63.86 2.75 1.66a23.87 23.87 0 016.11-5.23L15 10c-2.14 1.87-3.7 3.95-5.97 8A42.8 42.8 0 005 13.73z"></path>
                      </svg>
                    </button>
                  </div>
                </fieldset>
              </div>
              <aside className="m:w-full d:w-fit m:mt-10 d:my-4 rounded m:grid m:[grid-template-areas:'.''.''back'] d:[grid-area:links] bg-secondary text-white text-l">
                <CodeLink
                  codeLinkClassName="px-4 py-3 d:border-r-2 d:border-r-[#5d4034] m:[grid-area:back] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="/#main"
                  codeLinkRel="home"
                  codeLinkTarget="_self"
                  codeLinkText="Go back"
                  svgClassName="ml-4"
                  svgTitle="Return to the projects page"
                  pathFill="#fff"
                  pathD="M11 21h8v-2l1-1v4h-9v2L1 21V3l10-3v2h9v5l-1-1V3h-8v18zm10-9-3.2-3.3.7-.7 4.5 4.5-4.5 4.5-.7-.7L21 13h-9v-1h9z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] d:border-r-2 d:border-r-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/text-manipulation.git"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See repo"
                  svgClassName="ml-4"
                  svgTitle="View the project's repository"
                  pathFill="#fff"
                  pathD="M15 16H9v-2h6v2zm9-8v2H0V8l4.5-8h15L24 8zm-2.3 0-3.3-6H5.7L2.3 8h19.4zM21 22H3V12H1v12h22V12h-2v10z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/text-manipulation/blob/main/text-manipulation.js"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See source code"
                  svgClassName="ml-4"
                  svgTitle="View the project's source code"
                  pathFill="#fff"
                  pathD="M16 3h-1L8 21h1l7-18zm0 4 6 5-6 5 1 1 7-6-7-6-1 1zM8 7l-6 5 6 5-1 1-7-6 7-6 1 1z"
                />
              </aside>
            </article>
          </main>
          <Footer />
        </div>
      </>
    );

};

const canonicalURL = `<link rel="canonical" href="https://chrisnewton.dev/text-manipulator"/>`;
const title = `<title>Text Manipulator | Chris Newton — Web Developer</title>`;
const description = `<meta name="description" content="A text manipulation tool with some basic SED-like string manipulation options."/>`;
const JSON = ``;
const extraAMPScripts = ``;

export default { TextManipulator, Head: { canonicalURL, description, title, JSON, extraAMPScripts } };
