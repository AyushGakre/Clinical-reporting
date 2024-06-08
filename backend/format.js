const formatText = (text) => {
    // Replace all instances of '**' with an empty string
    let formattedText = text.replace(/\*\*/g, '');
  
    // Replace all instances of '\n' with a space
    formattedText = formattedText.replace(/\n/g, ' ');
    formattedText = formattedText.replace(/\* /g, '');
  
    return formattedText;
  };
  
  // Example usage
  const inputText = `It seems you're asking for a medical report explaining cardiovascular terms in layman's terms. I can help with that, but
I can't provide actual medical diagnoses or treatment advice. That's something you need to discuss with a qualified
doctor.

Here's a breakdown of common cardiovascular terms:

**Heart & Blood Vessels**

* **Cardiovascular** - This refers to the heart and blood vessels. "Cardio" relates to the heart, and "vascular" refers
to the vessels that carry blood.
* **Heart** - The muscular organ that pumps blood throughout the body.
* **Blood Vessels** - The network of tubes that carry blood. They include:
* **Arteries** - Carry oxygen-rich blood away from the heart.
* **Veins** - Carry oxygen-poor blood back to the heart.
* **Capillaries** - Tiny vessels that connect arteries and veins, allowing for exchange of nutrients and waste between
blood and tissues.

**Conditions and Issues**

* **Atherosclerosis** - A buildup of plaque (fatty deposits) inside arteries, narrowing them and restricting blood flow.
* **Angina** - Chest pain caused by reduced blood flow to the heart muscle.
* **Heart Attack (Myocardial Infarction)** - Damage to the heart muscle due to a complete blockage of blood flow.
* **Stroke** - Occurs when a blood vessel in the brain is blocked or ruptures, interrupting blood flow to the brain.
* **Heart Failure** - The heart is unable to pump blood effectively, leading to fatigue, shortness of breath, and
swelling.
* **Arrhythmia** - An irregular heartbeat, either too fast, too slow, or irregular.
* **Hypertension (High Blood Pressure)** - When the force of blood against artery walls is consistently too high.
* **Hyperlipidemia (High Cholesterol)** - Elevated levels of cholesterol in the blood, contributing to atherosclerosis.

**Tests and Procedures**

* **Electrocardiogram (ECG or EKG)** - A test that measures electrical activity in the heart.
* **Echocardiogram** - An ultrasound imaging test that shows the structure and function of the heart.
* **Stress Test** - Measures heart function during physical activity.
* **Cardiac Catheterization** - A procedure where a thin tube is inserted into a blood vessel to visualize the heart and
blood vessels.
* **Angioplasty** - A procedure to open blocked arteries using a balloon catheter.
* **Stent** - A small mesh tube inserted into an artery to keep it open.
* **Bypass Surgery** - A procedure that uses a healthy blood vessel to reroute blood flow around a blocked artery.

**Remember:** This is not a complete list, and medical terminology can be complex. Always consult a doctor for accurate
information and diagnosis.`;
  
  const formattedText = formatText(inputText);
  
  console.log(formattedText);
  
  