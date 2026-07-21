export const analyzeImage = async (base64Img: string) => {
    const res = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        body: JSON.stringify({
          image: base64Img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Unable to analyze image");
    }

    return res.json();
  };