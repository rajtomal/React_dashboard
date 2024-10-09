import { Environment } from "../Services/Environment";
export const getDivision = async () => {
    try {
        const response = await fetch(`${Environment}/division`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const postDivision = async (data) => {
    try {
        const response = await fetch(`${Environment}/division`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}