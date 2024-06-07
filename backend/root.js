const { Translate } = require("@google-cloud/translate").v2;
require('dotenv').config();

// Check if the environment variable is set
if (!process.env.CREDENTIALS) {
    console.error('Error: CREDENTIALS environment variable is not set');
    process.exit(1);
}

// Parse credentials
let CREDENTIALS;
try {
    CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
} catch (error) {
    console.error('Error parsing CREDENTIALS environment variable:', error);
    process.exit(1);
}

// Configuration of the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});



const translateText = async (text, targetLanguage) => {
    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText('During the examination, the patient, a 58-year-old male, presented with complaints of chest pain, shortness of breath, and fatigue. The chest pain was described as a pressing sensation radiating to the left arm, which intensified with physical activity and relieved with rest. The patient also reported episodes of dizziness and palpitations. Physical examination revealed a heart rate of 95 beats per minute, blood pressure of 160/95 mmHg, and a noticeable irregular heartbeat. Auscultation detected a systolic murmur at the apex. Peripheral pulses were weak, and there was mild peripheral edema in the lower extremities.', 'kn')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });