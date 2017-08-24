import { version } from 'inferno';

function showVersion() {
	alert(`The version is: ${ version }!`);
}

export default function VersionComponent({ params }) {
  return (
    <div>
    <p>The current color is #{ params.color }</p>
    </div>
  );
}
