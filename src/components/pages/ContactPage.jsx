export default function ContactPage() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <textarea placeholder="Message"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}