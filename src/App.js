import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Line from './components/line';
import Points from './components/point';
import Plane from './components/plane';

function App() {
	return (
		<Canvas>
			<ambientLight intensity={1} color="white" />
			<spotLight position={[0, 0, 0]} angle={0.5} penumbra={1} />
			<pointLight position={[0, 0, 0]} />
			<OrbitControls />
			<Line start={[-10, 0, 0]} end={[10, 0, 0]} colour="red"/>
			<Line start={[0, -10, 0]} end={[0, 10, 0]} colour="blue"/>
			<Line start={[0, 0, -10]} end={[0, 0, 10]} colour="green"/>


			{ /**
				 * create tetrahedron
  			*/}
			<Line start={[1, 1, 1]} end={[2, 2, 2]} />
			<Line start={[1, 1, 1]} end={[1, 2, 2]} />
			<Line start={[1, 1, 1]} end={[2, 2, 1]} />
			<Line start={[2, 2, 2]} end={[2, 2, 1]} />
			<Line start={[2, 2, 2]} end={[1, 2, 2]} />
			<Line start={[1, 2, 2]} end={[2, 2, 1]} />

			<Points 
				count={10}
				ax
				ay
			/>
			<Points 
				count={10}
				ax
				az
			/>
			<Points 
				count={10}
				az
				ay
			/>

			{/* <Plane /> */}
		</Canvas>
	);
}

export default App;
