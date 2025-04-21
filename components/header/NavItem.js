import Link from "next/link";

export const NavItem = ({ href, children, isSpecial, isActive, onMouseEnter, onMouseLeave }) => (
    <li
        onMouseEnter={onMouseEnter}
        onMouseUp={onMouseLeave}
    >
        <Link
            href={href}
            className={`
          relative
          font-poppins
          ${isSpecial ? 'text-error hover:text-error/80' : 'text-foreground hover:text-foreground/80'}
          transition-colors duration-200
          after:absolute
          after:bottom-[-4px]
          after:left-0
          after:h-[2px]
          after:w-0
          after:bg-primary
          after:transition-all
          after:duration-300
          hover:after:w-full
          ${isActive
                    ? 'after:w-full after:bg-primary'
                    : 'after:w-0 after:bg-primary hover:after:w-full'
                }
        `}
        >
            {children}
        </Link>
    </li>
);