import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";


const useSocialAuth = () => {
    const [loadingStrategy, setloadingStrategy] = useState<string | null>(null);
    const { startSSOFlow } = useSSO();

    // Function to handle social sign-in
    const handleSocialAuth= async (strategy:"oauth_google"|"oauth_github"|"oauth_apple")=>{

        
        if(loadingStrategy) return; // Prevent multiple simultaneous sign-in attempts

        setloadingStrategy(strategy);

        try { 
            const {createdSessionId,setActive}= await startSSOFlow({strategy});
            if(!createdSessionId || !setActive){
                Alert.alert("Sign-in incomplete","Sign-in was not completed. Please try again.");
                return;
            }
            await setActive({session:createdSessionId});
    }
    catch(error){
        console.log("Social auth error:",error);
        Alert.alert("failed to sign in , please try again later");
    }
    finally{
        setloadingStrategy(null);
    }
}
return {loadingStrategy,handleSocialAuth};
}

export {useSocialAuth};
