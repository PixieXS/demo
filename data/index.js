import { navigation } from "./common/navigation"

export const getPageContext = (pagePath) => {
    const commonVariables = {
        ...navigation
    }

    let pageVariables = {};
    switch (pagePath) {
        case 'index.html':
            break;
    }
    return {
        ...commonVariables,
        ...pageVariables
    }
}