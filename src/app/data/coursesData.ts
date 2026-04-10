export interface Resource {
  type: 'summary' | 'slides' | 'exams';
  url: string;
}

export interface Course {
  id: string;
  titleEn: string;
  titleAr?: string;
  professor?: string;
  resources: Resource[];
  youtubeLinks: string[];
  category: 'core' | 'electives' | 'science' | 'university';
}

export const coursesData: Course[] = [
  {
    id: "algo",
    titleEn: "Algorithms",
    professor: "الدكتور امجد هواش",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/199LAabC-DD6d0j3ckJCXqO3CFn-XUuHN?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/199LAabC-DD6d0j3ckJCXqO3CFn-XUuHN?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/199LAabC-DD6d0j3ckJCXqO3CFn-XUuHN?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqXkg_eDehp5_IuU_mdYRC6&si=eBlXhtdlWXuiJDvE",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrNANWgR_DJpwhlyJt91Giu&si=WF0bbERajuTMX-FV",
    ],
    category: "core",
  },
  {
    id: "assembly",
    titleEn: "Computer Organization and Assembly",
    professor: "الدكتور احمد عواد",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1-GtREgV9BNEIZyFfbSdVs95f6Nu_Kydw?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1-GtREgV9BNEIZyFfbSdVs95f6Nu_Kydw?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrJazSHSy75-a0kSIGzMMbF&si=EEeDNrH1oI7g8MZb",
    ],
    category: "core",
  },
  {
    id: "calc1",
    titleEn: "Calculus 1",
    professor: "الدكتور احمد ذباينة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1xTuGGptuSIjOHPyqGvaPpb90_q1VuY_Y?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/NpIrlfJ9550?si=jemroe2oxezLUfDM",
      "https://youtube.com/playlist?list=PLfSfgogjoC5ognXG_z1KvbZSnYD_HpZAf&si=vvBQAXwABL8QUixa",
    ],
    category: "core",
  },
  {
    id: "calc2",
    titleEn: "Calculus 2",
    professor: "الدكتور احمد ذباينة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/13016jw0i8PfjlrOhJIjx0pT9lIm-s5w8?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/p224HQ5-Yn8?si=fDL2TXEcULcTL7X4",
      "https://youtu.be/1Mz-Ly_z5bU?si=ERfIqw-gvQ7Lgzfl",
    ],
    category: "core",
  },
  {
    id: "compArch",
    titleEn: "Computer Architecture",
    professor: "الدكتور احمد عواد",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1byMjTQEdgofl5PTj7AK2AYZuXS9tJ70_?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1byMjTQEdgofl5PTj7AK2AYZuXS9tJ70_?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1byMjTQEdgofl5PTj7AK2AYZuXS9tJ70_?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqJqRRZTe9yE__XtqDx1Noy&si=sG5BLMWDXAiaSRD5",
      "https://youtu.be/_Z4BcXL1n7Y?si=MWbWXCguKCgYeJDX",
      "https://youtu.be/VkG6pNhYihQ?si=EjC9TGpyyzHYoC_W",
    ],
    category: "core",
  },
  {
    id: "compiler",
    titleEn: "compiler",
    professor: "الدكتور بكر عبد الحق",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1KKxwFNjcYPuV3x5CzYiMm8UqOfqw-yQz?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1KKxwFNjcYPuV3x5CzYiMm8UqOfqw-yQz?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL3mDEAb0jyXp0X3bqC8r88Nl-SVllu3-c&si=du-bZGi5n2d4bQwU",
      "https://youtu.be/cQJzgHdWGDk?si=Rf_BjbSkCjFIqjLq",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyoVhbSBccQaQpQL0t5yFcpt&si=-XFWdaxdQIjAphUj",
    ],
    category: "core",
  },
  {
    id: "database",
    titleEn: "Database Systems 1",
    professor: "الدكتورة سهاد ضراغمة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1-Rc5erP6LLjUWDomCirTLWRw9GKYFfXF?usp=sharing" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1-Rc5erP6LLjUWDomCirTLWRw9GKYFfXF?usp=sharing" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1-Rc5erP6LLjUWDomCirTLWRw9GKYFfXF?usp=sharing" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyr-AzI5q3fOHWyiX1IDT3xU&si=wI2ToUEs3XzkSzar",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyoN9ghpooyhvibZ-_YpBuGo&si=ri_Mc4OBaxf6Oa1J",
      "https://youtu.be/TGqiqpDPLEA?si=hp4LjZOa6SeLMw0y",
    ],
    category: "core",
  },
  {
    id: "datastruc",
    titleEn: "Data Structures",
    professor: "الدكتورة سهاد ضراغمة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1-4dZIBH6rtwyXa-tk8kWW4INOK6PsBt0?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1-4dZIBH6rtwyXa-tk8kWW4INOK6PsBt0?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/jGP19W5IObA?si=R8hreiLfY3BW6Kcp",
      "https://youtu.be/owCqVRbZlbg?si=tJtQMOKbd5zyEtBs",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqwLItfgnscZ-JqKbnoeKyG&si=dvnWQ0MO5J6v2GPl",
    ],
    category: "core",
  },
  {
    id: "descrete",
    titleEn: "Discrete Mathematics",
    professor: "الدكتورة مي كنعان",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1_JrycBWeKhoqg3SRMcXnl2xWv3cT7Wga?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrX7QCmdWHxJt-0W6nRTIAX&si=E5sls-SGav5EVXFg",
    ],
    category: "core",
  },
  {
    id: "digital",
    titleEn: "Digital Logic",
    professor: "الدكتورة منار عرفات",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/16nNQujyenfelMrRn0WGL18gRbF64Skx1?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/16nNQujyenfelMrRn0WGL18gRbF64Skx1?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/16nNQujyenfelMrRn0WGL18gRbF64Skx1?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqypbtPNQx_A_0q5HE5j1zkmo&si=na-GUjqsDaKKbE47",
    ],
    category: "core",
  },
  {
    id: "linear",
    titleEn: "Linear Algebra",
    professor: "الدكتور وائل مصطفى",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1-OKsGGkSkhybBnNAKq1L7_obHRz0v_6D?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrVSnMozLGaIIdVukVVSrFW&si=K4zRadaF1_SuSc0R",
    ],
    category: "core",
  },
  {
    id: "networks",
    titleEn: "Computer Networks",
    professor: "الدكتور عدنان سلمان",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1X-nQDOEV80jaFrnZdDVU7YgZ2flyMlk4?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1X-nQDOEV80jaFrnZdDVU7YgZ2flyMlk4?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1X-nQDOEV80jaFrnZdDVU7YgZ2flyMlk4?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqypCGQzKnxmXkVJD29MthYy5&si=e8b8VeNVjhPB9b1G",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrd8zIt5ru8CTXPJKZIl8Rs&si=qJEtbKE9ZwnA7qqJ",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqEf5S6k6EYijq5jMSFE-VU&si=DW-v2gehtyHg_LAg",
      "https://youtube.com/playlist?list=PL6DO2VnGFqypGAf74hdbl838BTBwKWApS&si=QpdCCxRqPp_gnwbd",
    ],
    category: "core",
  },
  {
    id: "numerical",
    titleEn: "Numerical Analysis",
    professor: "الدكتور يحيى جعافرة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1z2M54pjAj6a1MdENzmxsw5TAbLvQ1ga6?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1z2M54pjAj6a1MdENzmxsw5TAbLvQ1ga6?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/DsV9qZv3sqs?si=R4UCnL5TL4P3G-Ak",
    ],
    category: "core",
  },
  {
    id: "object",
    titleEn: "Object-Oriented Analysis and Design",
    professor: "الدكتور عماد سعادة",
    resources: [
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyp04FifDxy7gOIgTiCHLDQ0&si=k3GhEg68NfuU6AsG",
    ],
    category: "core",
  },
  {
    id: "os",
    titleEn: "Operating Systems",
    professor: "الدكتور بكر عبد الحق",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1j5eCxm1xYWnLlkO3atkz_K-XBbQM_jDK?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1j5eCxm1xYWnLlkO3atkz_K-XBbQM_jDK?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1j5eCxm1xYWnLlkO3atkz_K-XBbQM_jDK?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/aRSo7wkV8Ks?si=jjs77yUOwGYltATw",
      "https://youtu.be/qLxlWgm-N50?si=WFD_mQY3CIEngL6y",
      "https://youtube.com/playlist?list=PL3gLvFbnCPwKa8egnUuHq0-2azaLILoTv&si=Lav12_ftt8Z8azmB",
    ],
    category: "core",
  },
  {
    id: "parallel",
    titleEn: "Distributed Systems & Parallel Computing",
    professor: "الدكتور عدنان سلمان",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1uMSPVK-xMpD3Myc-x-vjo3JdJZSR7kav?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqypM_oXdepDaatabbb4AvFA_&si=4Vzx83F2S6NhJEgD",
    ],
    category: "core",
  },
  {
    id: "prog1",
    titleEn: "Programming 1",
    professor: "الدكتورة سهاد دراغمة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1sR_18UCACgFv5t2Wf0PbW3LvdTi9vMQS?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1sR_18UCACgFv5t2Wf0PbW3LvdTi9vMQS?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PLfhQ90MyYJQEqSbczAZLuUtTljHwb_io_&si=Nl5915vApu-sfvM5",
      "https://youtube.com/playlist?list=PL1DUmTEdeA6IUD9Gt5rZlQfbZyAWXd-oD&si=t_pFCHOEhgH0q5wA",
      "https://youtube.com/playlist?list=PLHV4LedXTf4HICiOPghBKoojZPuW_UxdE&si=bkQhT3_M-IOYbaJY",
    ],
    category: "core",
  },
  {
    id: "prog2",
    titleEn: "Programming 2",
    professor: "الدكتورة سهاد دراغمة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1A8xoVrs4pQleZwrl_Rm-nao3c4vlKrEX?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1A8xoVrs4pQleZwrl_Rm-nao3c4vlKrEX?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/z1FdInL8sjg?si=GjEjuwr3uclEu_gZ",
      "https://youtube.com/playlist?list=PLfFcDpZU7MgabGbVZBg9BlGdaFdoeEYXp&si=yqyRK5Klf4l6hhpl",
      "https://youtube.com/playlist?list=PLg9wrIfTPI6Oso-5Dv_Fft1fm4Vx9QpoI&si=3X-fTZekBGXp5Mzq",
    ],
    category: "core",
  },
  {
    id: "progLang",
    titleEn: "Programming Languages",
    professor: "الدكتور بكر عبد الحق",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1jn8aOFgm0qchtHMLijRKJ0hbk7jLgf2N?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtu.be/smjOq1YnuL8?si=xDavrYV02eSEQYum",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyoBet6Vh-00XeMAFCTRKAqg&si=gFMN25dePLoj3VZn",
      "https://youtube.com/playlist?list=PL3gLvFbnCPwKW2OzhxScIleyJK7Gzy7Gp&si=5K1MKmuUuyRIg14g",
      "https://youtu.be/y5duxKx3ELY?si=zTOik1qFcGOrB2dr",
    ],
    category: "core",
  },
  {
    id: "research",
    titleEn: "Scientific Research Methods",
    professor: "الدكتورة مجد شهدي",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/12yL7o-NuZEBxlEa2tX-w2LNFDvRk0BVE?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "core",
  },
  {
    id: "software",
    titleEn: "Software Engineering",
    professor: "الدكتور عماد سعادة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1V1iCo-u8ZLFdDc6Vrwi4bKWYrepg-uZY?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1V1iCo-u8ZLFdDc6Vrwi4bKWYrepg-uZY?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1V1iCo-u8ZLFdDc6Vrwi4bKWYrepg-uZY?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyq_Uct_hcjawYvUBuTDEFli&si=2jqPHY_zyYXsPDiy",
    ],
    category: "core",
  },
  {
    id: "Statistics",
    titleEn: "Statistics and Probability",
    professor: "الدكتورة اماني عرمان",
    resources: [
      { type: "slides", url: "https://drive.google.com/drive/folders/1Z_QRDgeMYErbFxIJPC3QKhpOwS6ebJSu?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1Z_QRDgeMYErbFxIJPC3QKhpOwS6ebJSu?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "core",
  },
  {
    id: "web",
    titleEn: "Web Programming",
    professor: "الدكتورة مي ابو سير",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1QeFprIn3sIWkf2n2PORi0uwuCMXvTpcT?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1QeFprIn3sIWkf2n2PORi0uwuCMXvTpcT?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqt_gMkN8MPC_XwN4Try5k4&si=eko49RN8JJmIdeIX",
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqt_gMkN8MPC_XwN4Try5k4&si=deF9O_KMfdU_kjfW",
    ],
    category: "core",
  },
  {
    id: "advanced",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "Ai",
    titleEn: "Artificial Intelligence",
    professor: "الدكتور وائل مصطفى",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1pk7yZ08kd074Z4hYPp0MVKXnoztIFW4X?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1pk7yZ08kd074Z4hYPp0MVKXnoztIFW4X?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqTKpQpuL1LphWnFF7YQuEG&si=7yUVvwPmbxEouUVn",
    ],
    category: "electives",
  },
  {
    id: "crypto",
    titleEn: "Cryptography and Computer Security",
    professor: "الدكتور امجد هواش",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1sqyrXvEbxPMS7Is9lvb8ZSzphw8ECVbt?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1sqyrXvEbxPMS7Is9lvb8ZSzphw8ECVbt?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyrltGyC6pjCPd0_-XW_Y67s&si=YViVLN4uuKuU304A",
    ],
    category: "electives",
  },
  {
    id: "dataBase2",
    titleEn: "Database Systems II",
    professor: "الدكتور مؤمن ابو غزالة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/13RJuZohcqb9CPSUGav6z8pPpFMa5vang?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/13RJuZohcqb9CPSUGav6z8pPpFMa5vang?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyoGqWXEvhDPdCDY1spWr9Cd&si=lqbIWCI_O8ta4ujA",
    ],
    category: "electives",
  },
  {
    id: "gis",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "graphics",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "image",
    titleEn: "Digital Image Processing",
    professor: "الدكتور فادي دريدي و الدكتور انس طعمة",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1GU7wI6cKIRhi9eDEHlYFFrPmPKEM1ZbI?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1GU7wI6cKIRhi9eDEHlYFFrPmPKEM1ZbI?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1GU7wI6cKIRhi9eDEHlYFFrPmPKEM1ZbI?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "innovation",
    titleEn: "Oops",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "Ml",
    titleEn: "Machine Learning",
    professor: "الدكتور عدنان سلمان",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1hkR0s6Lze2zrurbhLmQLWY3haZNf7c3O?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1hkR0s6Lze2zrurbhLmQLWY3haZNf7c3O?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqypZCSkH7N659Asxz16fKxpQ&si=li160u_JpPcySgRQ",
    ],
    category: "electives",
  },
  {
    id: "mobile",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "multimedia",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "network2",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "os2",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "simulation",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "unix",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "wirles",
    titleEn: "Content Coming Soon",
    professor: "This course page will be updated later.",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "electives",
  },
  {
    id: "chemical1",
    titleEn: "Oops",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "science",
  },
  {
    id: "chemLab",
    titleEn: "Oops",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "science",
  },
  {
    id: "phyLab1",
    titleEn: "Physics Lab 1",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1FBbTGP2zakQJUHdo7a8CJQU6Il0m0JGz?usp=drive_link" },
      { type: "exams", url: "https://drive.google.com/drive/folders/1FBbTGP2zakQJUHdo7a8CJQU6Il0m0JGz?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PLH07opsEs0KSOuAZxxtnAgk1d4sY8M8uE&si=SUmUt1zlmWL1Zphv",
    ],
    category: "science",
  },
  {
    id: "physics1",
    titleEn: "Physics 1",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1N_q6DvdVfvGfkKqM9jfbiqLxP6SYt7qf?usp=drive_link" },
      { type: "slides", url: "https://drive.google.com/drive/folders/1N_q6DvdVfvGfkKqM9jfbiqLxP6SYt7qf?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "science",
  },
  {
    id: "pio",
    titleEn: "Oops",
    resources: [
    ],
    youtubeLinks: [
    ],
    category: "science",
  },
  {
    id: "pioLab",
    titleEn: "Biology Lab 1",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1Z9Zso4Ax1J_hTN2Pow3KpVEFxkhaHbsk?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "science",
  },
  {
    id: "101",
    titleEn: "English 101",
    resources: [
      { type: "slides", url: "https://drive.google.com/drive/folders/1zI4Z0zmfBhVV149dYlzBIA052GgIumPd?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "university",
  },
  {
    id: "102",
    titleEn: "English 102",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/16_DCzSo3S2lDOU91kbBiq0EBOKKBvVDP?usp=drive_link" },
    ],
    youtubeLinks: [
    ],
    category: "university",
  },
  {
    id: "comp",
    titleEn: "Computer Skills",
    professor: "الدكتورة منار عرفات",
    resources: [
      { type: "summary", url: "https://drive.google.com/drive/folders/1zx46QcAN7tzSOFdNgn4K5IB8tU_SyU6w?usp=drive_link" },
    ],
    youtubeLinks: [
      "https://youtube.com/playlist?list=PL6DO2VnGFqyqDYwaIiDA00DdNWSolyyVy&si=reqq4dLOsV-SpVQW",
    ],
    category: "university",
  }
];

