import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className='footer bg-body-tertiary mt-auto' style={{padding: '2rem'}}>
            <Container fluid className='text-md-left'>
                <Row className='footerLinks'>
                    <Col className='col-md-6 mt-md-0 mt-3'>
                        <h5 className="text-uppercase">About me</h5>
                        <p>
                            I am a one-man team and I work on this unofficial fan website in my spare time. If you 
                            appreciate the work I do, consider buying me a coffee!
                        </p>
                        <p>
                            Updates to this site will continuously roll out. If you're interested in participating in
                            the improvement of this tool, please check out the Github links to fill out bug reports,
                            enhancement suggestions, see my current tasks and ideas, participate in polls for the next
                            major improvement/feature I work on, and more!
                        </p>
                    </Col>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <Col className='col-md-3 mb-md-0 mb-3'>
                        <h5 className="text-uppercase">Github</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D+">Find a bug?</a></li>
                            <li><a href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=%5BENHANCEMENT%5D+">Enhancement idea?</a></li>
                            <li><a href="https://github.com/mjohnson159/The-Witcher-Old-World-Tool-Issues/discussions">Discussions</a></li>
                            <li><a href="https://github.com/users/swirle13/projects/2/views/3">Project timeline</a></li>
                            <li><a href="https://github.com/users/swirle13/projects/2/views/1">Task Board</a></li>
                            <li><a href="https://github.com/swirle13/The-Witcher-Old-World-Tool-Issues/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">All open bugs/enhancements</a></li>
                        </ul>
                    </Col>

                    <Col className='col-md-3 mb-md-0 mb-3'>
                        <h5 className="text-uppercase">Communities</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://discord.com/invite/mX8yvYQTuq">Official Discord</a></li>
                            <li><a href="https://www.kickstarter.com/projects/goonboard/the-witcher">Kickstarter</a></li>
                            <li><a href="https://boardgamegeek.com/boardgame/331106/witcher-old-world">Board Game Geek</a></li>
                        </ul>
                        <h5 className="text-uppercase">Support Me</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://bmc.link/swirle13">Buy me a coffee ☕️</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className='footerBottom text-center py-3'>
                    
                </Row>
            </Container>
        </footer>
    );
}