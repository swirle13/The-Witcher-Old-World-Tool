// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction

import Container from 'react-bootstrap/Container';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';

export default function Home() {

    /*
      TODO: Create simplified home page for generic actions, e.g.
      Setup:
          1. Roll the proper amount of monster cards, subsequent terrain tokens, and randomly assign one to each.
          2. Randomly assign player boards
          3. Generate player cards and gold setup
          All based on provided number of players to adjust, and selected expansions.
      Three monsters pictures, each with three buttons underneath:
          1. Defeated monster
          2. Chased away monster
          3. Complete loss to monster
          Automatically rolls new monster of new appropriate level for situation
    */

    /*
        Breakpoints
        ============================
        X-Small		 None	<576px
        Small		 sm		≥576px
        Medium		 md		≥768px
        Large		 lg		≥992px
        Extra large	 xl		≥1200px
        Extra extra  large	xxl	≥1400px
    */

    return (
        <Container className='BaseContainer px-0'>
            <Navbar />
            <Outlet />
        </Container>
    );
}
