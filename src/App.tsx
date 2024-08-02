import '@radix-ui/themes/styles.css';
import SideBar from './Components/SideBar';
import { Button, TextField, Theme } from '@radix-ui/themes';

function App() {

  return (
    <>
      <SideBar />
      <div className='flex flex-col justify-center bg-blue-200'>
        <div className='flex justify-center align-center h-48 mt-10'>
          <img src='/src/images/logo.svg' />
        </div>
        <div className='place-self-center mt-5'>
        <Theme radius="large" accentColor='blue' className='bg-blue-200 w-96'>
            <TextField.Root size="3" placeholder="Insira o código de rastreio...">
              <TextField.Slot side="right" px="1">
                <Button size="2">
                  <a href='#'>Send</a>
                </Button>
              </TextField.Slot>
            </TextField.Root>
        </Theme>
        </div>
      </div>
    </>
  )
}

export default App
