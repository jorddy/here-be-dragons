export default function Lights() {
  return (
    <>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <fog args={["aquamarine", 1, 100]} />
    </>
  );
}
