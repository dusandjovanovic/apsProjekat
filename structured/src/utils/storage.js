export const initAuth = (access_token, user_id) => {
    try {
        localStorage.setItem(
            "auth",
            JSON.stringify({
                access_token,
                user_id
            })
        );
    } catch (error) {
        console.log(error);
    }
};

export const readAuth = () => {
    try {
        return JSON.parse(localStorage.getItem("auth")) || undefined;
    } catch (error) {
        console.log(error);
    }
};

export const removeAuth = () => {
    try {
        localStorage.removeItem("auth");
    } catch (error) {
        console.log(error);
    }
};