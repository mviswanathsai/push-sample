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
        let push = sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'TODO'
        })

    }

    return (
        <div>
            Test notification client
            <button onClick={() => { handleSubscribe() }}>Subscribe</button>
        </div>

    );
}

export default App;
