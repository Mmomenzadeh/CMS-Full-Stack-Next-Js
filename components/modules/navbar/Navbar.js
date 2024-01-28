import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };

  useEffect(() => {
    setSearch(route.query.q);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          type="text"
          placeholder="جستجو کنید...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.navbar_search_icon} onClick={searchHandler}>
          {/* <FontAwesomeIcon icon={faSearch} /> */}

          search
        </button>
      </div>
      <div className={styles.navbar_user_avatar}>
        <img src="/images/avatar/avatar.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
