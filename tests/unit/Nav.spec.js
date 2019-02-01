import Navbar from '@/components/Navbar.vue'
import {mount} from '@vue/test-utils';
import { expect } from 'chai'

describe('Navbar', () => {
    const wrapper = mount(Navbar);

    // it('renders correct markup', () => {
    //     expect(wrapper.html()).to.Contain(`<div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav ml-auto">
    //         <li class="nav-item active">
    //             <router-link to="/login" class="nav-link">Admin Login</router-link>
    //         </li>
    //     </ul>
        
    // </div>`)
    // })
})

