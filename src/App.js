import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
		<header id="header">
			<div className="inner">
                <a href="index.html" className="logo">
                    <img src="img/崩壞3logo.png" alt="" />
                </a>
            </div>
        </header>
		<section id="banner">
            <video loop="true" autoplay="autoplay" preload="auto">
                <source type="video/mp4" src="video/AWAKEN HonkaiMemory.mp4" />
            </video>
			<div className="inner">
				<h1>Honkai Impact 3rd:<br /><span>Fight for everything that is beautiful in this world!
				</span></h1>
				<ul className="actions">
					<li><a href="main.html" className="button alt">get started</a></li>
                </ul>
                
			</div>
        </section>
    <footer id="footer">
        <div className="footer_bg"><img src="img/六角圖樣2.png" alt="" /></div>
        <ul className="icons">
            <li><a href="https://twitter.com/HonkaiImpact3rd" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://m.facebook.com/bh3tw/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/bh3.tw/?igshid=1e1qmyt9drwdb" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <div className="copyright">
            &copy; . Design: <a href="#">Nightang</a>. Images: <a href="https://www.bh3.com/">《崩壞3》Honkai Impact</a>.
        </div>
    </footer>        

		<script src="%PUBLIC_URL%/js/jquery.min.js"></script>
		<script src="%PUBLIC_URL%/js/skel.min.js"></script>
		<script src="%PUBLIC_URL%/js/util.js"></script>
    <script src="%PUBLIC_URL%/js/main.js"></script>
        
        <script type="text/javascript">
            if ('WebSocket' in window) {
                (function () {
                    function refreshCSS() {
                        var sheets = [].slice.call(document.getElementsByTagName("link"));
                        var head = document.getElementsByTagName("head")[0];
                        for (var i = 0; i < sheets.length; ++i) {
                            var elem = sheets[i];
                            var parent = elem.parentElement || head;
                            parent.removeChild(elem);
                            var rel = elem.rel;
                            if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "myStylesheet") {
                                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                                elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                            }
                            parent.appendChild(elem);
                        }
                    }
                    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
                    var address = protocol + window.location.host + window.location.pathname + '/ws';
                    var socket = new WebSocket(address);
                    socket.onmessage = function (msg) {
                        if (msg.data == 'reload') window.location.reload();
                        else if (msg.data == 'refreshcss') refreshCSS();
                    };
                    if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                        console.log('Live reload enabled.');
                        sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
                    }
                })()
            }
            else {
                console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.')
            }
            
        </script>
        <a href="#navPanel" className="navPanelToggle"></a>
        <div id="navPanel" className="">
            <a href="world.html" myStyle="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">世界觀</a>
            <a href="generic.html" myStyle="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">角色</a>
            <a href="elements.html" myStyle="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">IP連結</a>
        <a href="#navPanel" className="close" myStyle="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></a></div>
    </div>
  );
}

export default App;
