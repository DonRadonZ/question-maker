import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{

    
    &, &.light-mode {
        --color-gray-0: #fff;
        --color-gray-50: #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;

        --color-blue-100: #cffafe;
        --color-blue-700:  #0e7490;
        --color-green-100: #dcfce7;
        --color-green-700: #15803d;
        --color-yellow-100: #fef9c3;
        --color-yellow-400: #fcc800;
        --color-yellow-700: #fcc800;
        --color-silver-100: #e5e7eb;
        --color-silver-700: #374151;
        --color-purple-100: #f3e8ff;
        --color-purple-700: #7e22ce;
        --color-brand-400: #2dd4bf;
        --color-brand-800: #115e59;

        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --color-rose-100: #ffe4e6;
        --color-rose-700: #c70036;

        --backdrop-color: rgba(255, 255, 255, 0.1);
  
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        /* For dark mode */
        --image-grayscale: 0;
        --image-opacity: 100%;

        ::-webkit-calendar-picker-indicator {
	        
	        height: 2.2rem;
	        width: 2.2rem;
	        
            cursor: pointer;
            filter: invert(20%) brightness(80%) contrast(90%) ;
        }


       .rdp-root {
        --rdp-accent-color: #4d7c0f; /* Change the accent color to indigo. */
        
        /* Add more CSS variables here. */
        }
    }

    
    &.dark-mode {
        --color-gray-0: #18212f;
        --color-gray-50: #111827;
        --color-gray-100: #1f2937;
        --color-gray-200: #374151;
        --color-gray-300: #4b5563;
        --color-yellow-100: #fcc800;
        --color-yellow-400: #fef9c2;
        
        --color-gray-500: #9ca3af;
        --color-gray-600: #d1d5db;
        --color-gray-700: #e5e7eb;
        --color-gray-800: #f3f4f6;
        --color-gray-900: #f9fafb;

        --color-blue-100: #0e7490;
        --color-blue-700: #cffafe;
        --color-green-100: #166534;
        --color-green-700: #dcfce7;
        --color-yellow-100: #ffc000;
        --color-yellow-700: #fef9c3;
        --color-silver-100: #374151;
        --color-silver-700: #f3f4f6;
        --color-purple-100: #7e22ce;
        --color-purple-700: #f3e8ff;
        --color-brand-400: #115e59;
        --color-brand-800: #2dd4bf;

        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        --color-rose-100: #c70036;
        --color-rose-700: #ffe4e6;

        --backdrop-color: rgba(0, 0, 0, 0.3);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

        --image-grayscale: 10%;
        --image-opacity: 90%;

        ::-webkit-calendar-picker-indicator {
	        
	        height: 2.2rem;
	        width: 2.2rem;
	        
            cursor: pointer;
            filter: invert(100%) brightness(90%) contrast(90%);
        }
        
        .rdp-root {
        --rdp-accent-color: #ecfccb; /* Change the accent color to indigo. */
        
        /* Add more CSS variables here. */
        }
    }


    /* Teal */
    --color-brand-50: #f0fdfa;
    --color-brand-100: #ccfbf1;
    --color-brand-200: #99f6e4;
    --color-brand-300: #5eead4;
    --color-brand-400: #2dd4bf;
    --color-brand-500: #14b8a6;
    --color-brand-600: #0d9488;
    --color-brand-700: #0f766e;
    --color-brand-800: #115e59;
    --color-brand-900: #134e4a;
    

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    }

    *,
    *::before,
    *::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: background-color 0.3s, border 0.3s;
    };

    html {
    font-size: 62.5%;
    }

    body{
        font-family: 'Sarabun', sans-serif;
        color: var(--color-gray-700);

        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }



    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    .date-picker {
        
        text-align: center;
    }
    
    
    

    select:disabled,
    input:disabled {
        background-color: var(--color-gray-200);
        color: var(--color-gray-500);
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus{
        outline: 2px solid var(--color-gray-600);
        outline-offset: -1px;
    }

    button:has(svg) {
        line-height: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}
`;



export default GlobalStyles;
