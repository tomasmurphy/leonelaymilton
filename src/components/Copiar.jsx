import { useState } from "react";

function Copiar({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copiar CBU', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 20000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div className="copiar">
        <input type="text" className="boton formu text-center" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button className='boton'onClick={handleCopyClick}>
          <span className="boton mx-2">{isCopied ? 'CVU copiado' : 'Copiar CVU'}</span>
        </button>
      </div>
    );
  }
  export default Copiar