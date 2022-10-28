import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Line from './components/line';

function App() {
  return (
	<Canvas>
		<ambientLight intensity={0.5} />
		<spotLight position={[0, 0, 0]} angle={0.5} penumbra={1} />
		<pointLight position={[0, 0, 0]} />
		<OrbitControls />
		<Line start={[-100, 0, 0]} end={[100, 0, 0]} />
		<Line start={[0, -100, 0]} end={[0, 100, 0]} />
		<Line start={[0, 0, -100]} end={[0, 0, 100]} />
	</Canvas>
  );
}

export default App;
