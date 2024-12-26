import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Other Layout UI */}
      <main className="font-work-sans">
        <Navbar/>
        {children}</main>
    </>
  )
}