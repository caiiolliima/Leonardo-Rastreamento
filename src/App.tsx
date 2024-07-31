import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import MyApp from './Components/MyApp2';

function App() {

  return (
    <>
      <div>
        <Theme>
          <MyApp />
        </Theme>
      </div>
    </>
  )
}

export default App
