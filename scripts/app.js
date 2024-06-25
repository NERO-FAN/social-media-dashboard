const darkModeActivated = () => {
    const buttonElement = document.getElementById("dark-mode-button-element");
    
    if (buttonElement.classList.contains("dark-mode-button-active")) {
        undarkify();
    }
    else {
        darkify();
    }
}

const darkify = () => {
    const headElement = document.getElementById("head");
    const bodyElement = document.getElementById("body");
    const pageContainer = document.querySelector(".page-container ");
    const borderElement = document.querySelector(".top-bg-border");
    const titleElement = document.querySelector(".title");
    const buttonContainer = document.querySelector(".button-container");
    const buttonElement = document.querySelector(".dark-mode-button")
    const secondRow = document.querySelector(".second-row");
    const overviewText = document.querySelector(".overview-text");
    const followsValue = document.getElementsByClassName("follows");
    const accountStatsContainer = document.getElementsByClassName("account-stats-container");
    const overviewAccountStatsContainer = document.getElementsByClassName("overview-accounts");
    const platformEngagements = document.getElementsByClassName("platform-info-value");
    const fourthRow = document.querySelector(".fourth-row");
    const fifthRow = document.querySelector(".fifth-row");
    
    headElement.classList.add("html-dark");
    bodyElement.classList.add("body-dark");
    pageContainer.classList.add("page-container-dark");
    borderElement.classList.add("top-bg-border-dark");
    titleElement.classList.add("title-dark");
    buttonContainer.classList.add("button-container-clicked");
    buttonElement.classList.add("dark-mode-button-active");
    secondRow.classList.add("second-row-dark");
    overviewText.classList.add("overview-text-dark");
    fourthRow.classList.add("fourth-row-dark");
    fifthRow.classList.add("fifth-row-dark");
    
    Array.from(followsValue).forEach(element => {
        element.classList.add("follows-dark");
    })
    
    Array.from(accountStatsContainer).forEach(account => {
        account.classList.add("account-stats-container-dark");
    })
    
    Array.from(overviewAccountStatsContainer).forEach(account => {
        account.classList.add("overview-accounts-dark");
    })
    
    Array.from(platformEngagements).forEach(info => {
        info.classList.add("platform-info-value-dark");
    })
}

const undarkify = () => {
    const headElement = document.getElementById("head");
    const bodyElement = document.getElementById("body");
    const pageContainer = document.querySelector(".page-container ");
    const borderElement = document.querySelector(".top-bg-border");
    const titleElement = document.querySelector(".title");
    const buttonContainer = document.querySelector(".button-container");
    const buttonElement = document.querySelector(".dark-mode-button");
    const secondRow = document.querySelector(".second-row");
    const overviewText = document.querySelector(".overview-text");
    const followsValue = document.getElementsByClassName("follows");
    const accountStatsContainer = document.getElementsByClassName("account-stats-container");
    const overviewAccountStatsContainer = document.getElementsByClassName("overview-accounts");
    const platformEngagements = document.getElementsByClassName("platform-info-value");
    const fourthRow = document.querySelector(".fourth-row");
    const fifthRow = document.querySelector(".fifth-row");
    
    headElement.classList.remove("html-dark");
    bodyElement.classList.remove("body-dark");
    pageContainer.classList.remove("page-container-dark");
    borderElement.classList.remove("top-bg-border-dark");
    titleElement.classList.remove("title-dark");
    buttonContainer.classList.remove("button-container-clicked");
    buttonElement.classList.remove("dark-mode-button-active");
    secondRow.classList.remove("second-row-dark");
    overviewText.classList.remove("overview-text-dark");
    fourthRow.classList.remove("fourth-row-dark");
    fifthRow.classList.remove("fifth-row-dark");
    
    Array.from(followsValue).forEach(element => {
        element.classList.remove("follows-dark");
    })
    
    Array.from(accountStatsContainer).forEach(account => {
        account.classList.remove("account-stats-container-dark");
    })
    
    Array.from(overviewAccountStatsContainer).forEach(account => {
        account.classList.remove("overview-accounts-dark");
    })
    
    Array.from(platformEngagements).forEach(info => {
        info.classList.remove("platform-info-value-dark");
    })
}