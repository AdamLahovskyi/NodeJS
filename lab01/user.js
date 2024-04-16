const fs = require('fs');

const getUserData = () => {
    try {
        const userDataBuffer = fs.readFileSync('user.json');
        const userDataJSON = userDataBuffer.toString();
        return JSON.parse(userDataJSON);
    } catch (e) {
        return { firstName: "", lastName: "", languages: [] };
    }
};

const saveUserData = (userData) => {
    const userDataJSON = JSON.stringify(userData);
    fs.writeFileSync('user.json', userDataJSON);
};

const addLanguage = (title, level) => {
    const userData = getUserData();
    const duplicateLanguage = userData.languages.find((language) => language.title === title);

    if (!duplicateLanguage) {
        userData.languages.push({ title, level });
        saveUserData(userData);
        console.log('Language added successfully!');
    } else {
        console.log('Language already exists!');
    }
};

const removeLanguage = (title) => {
    const userData = getUserData();
    const languageIndex = userData.languages.findIndex((language) => language.title === title);

    if (languageIndex !== -1) {
        userData.languages.splice(languageIndex, 1);
        saveUserData(userData);
        console.log('Language removed successfully!');
    } else {
        console.log('Language not found!');
    }
};

const listLanguages = () => {
    const userData = getUserData();
    console.log('Languages:');
    userData.languages.forEach((language) => {
        console.log(`Title: ${language.title}, Level: ${language.level}`);
    });
};

const readLanguage = (title) => {
    const userData = getUserData();
    const language = userData.languages.find((language) => language.title === title);

    if (language) {
        console.log(`Title: ${language.title}, Level: ${language.level}`);
    } else {
        console.log('Language not found!');
    }
};

module.exports = {
    addLanguage,
    removeLanguage,
    listLanguages,
    readLanguage
};
