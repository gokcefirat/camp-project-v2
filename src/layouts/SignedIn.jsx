import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
           
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/148809216?v=4"/>
        <Dropdown pointing="top left" text="Gökçe">
            <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item onClick ={props.signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        
            
        </Dropdown>
        </Menu.Item>
    </div>
  )
}
