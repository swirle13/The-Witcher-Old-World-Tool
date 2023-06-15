// Use components from https://react-bootstrap.netlify.app/docs/getting-started/introduction

import Container from 'react-bootstrap/Container';
import Navbar from './components/navbar';
import LostMount from './pages/lost_mount';

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

    return (
        <Container>
            <Navbar />
            <LostMount />
        </Container>
    );
}
