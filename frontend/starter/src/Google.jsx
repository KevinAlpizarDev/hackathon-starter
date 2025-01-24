// import { HooksApp } from "./HooksApp"

import { Animated } from "./components/Animated"
import { Nav } from "./components/Nav"
import { CounterWithCustomHook } from "./hooks/01-useSate/CounterWithCustomHook"
import { SimpleForm } from "./hooks/02-useEffect/SimpleForm"
import { AppRouter } from "./router/AppRouter"


export const Google = () => {
    return (
        <div className="relative h-screen ">
            {/* <AppRouter /> */}
            {/* <HooksApp /> */}
            {/* <CounterWithCustomHook /> */}
            {/* <SimpleForm /> */}
            <Nav />
            <Animated />
        </div>
    )
}

