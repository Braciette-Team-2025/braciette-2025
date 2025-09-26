import Link from "next/link";

function LoginNav() {
  return (
    <div className="relative group">
      <Link href="/login">Login</Link>
      <span className="absolute left-1/2 -translate-x-1/2 top-full flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
        ))}
      </span>
    </div>
  );
}

export default LoginNav;
