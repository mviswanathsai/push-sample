import './App.css';
import { useEffect } from "react"
function App() {


    useEffect(() => {
        registerServiceWorker()
    })
    async function registerServiceWorker() {
        const sw = await navigator.serviceWorker.register('./sw.js')
        console.log(sw)
    }
    async function handleSubscribe() {
        let sw = await navigator.serviceWorker.ready;
        let push = await sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey:'BKUc_OvdGM4KqyMIt9Cx6oFzkyz7U1pRV01Ykhrp0q25EQulA2d5vmjhCWk3f2twLJ8Q89awxUEobuS30cBh-7U'
        })
        console.log(JSON.stringify(push))
    }

    return (
        <div>
            Test notification client
            <button onClick={() => { handleSubscribe() }}>Subscribe</button>
        </div>

    );
}

export default App;
