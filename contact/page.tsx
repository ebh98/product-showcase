import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4x2 font-bold mb-6">Contact</h1>
        <p>Feel free to contact us at <b className='underline'>product.showcase@gmail.com</b></p>
      </main>
    </div>
  );
}