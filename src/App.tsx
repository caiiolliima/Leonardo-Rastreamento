import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import SideBar from './Components/SideBar';

function App() {

  return (
    <>
      <div>
        <Theme>
          <SideBar />
        </Theme>
      </div>
    </>
  )
}

export default App
