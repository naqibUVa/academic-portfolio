/* ============================================================
   PUBLICATIONS — Peer-reviewed articles, preprints, and conferences.
   ============================================================ */

const PUBLICATIONS = {

  // Optional note under the section heading.
  note: `<span class="me">Bold</span> denotes my name.
         See my <a href="https://scholar.google.com/citations?user=NUPZdZoAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar profile</a>
         or <a href="https://orcid.org/0000-0002-1571-8221" target="_blank" rel="noopener">ORCID</a> for the complete citation record.`,

  groups: [

    {
      name: "Journal Articles",
      papers: [

        {
          title: "Linear Optimal Transport Subspaces for Point Set Classification",
          authors: "Mohammad Shifat-E-Rabbi, Naqib Sad Pathan, Shiying Li, Yan Zhuang, Abu Hasnat Mohammad Rubaiyat, and Gustavo K. Rohde",
          venue: "<em>Journal of Mathematical Imaging and Vision</em>, vol. 67, no. 4, art. 43, 2025.",
          badge: "JMIV 2025",
          links: [
            { label: "DOI",   url: "https://doi.org/10.1007/s10851-025-01261-x" },
            { label: "arXiv", url: "https://arxiv.org/abs/2403.10015" },
          ],
        },

        {
          title: "Quantifying Nuclear Structures of Digital Pathology Images Across Cancers Using Transport-Based Morphometry",
          authors: "Mohammad Shifat-E-Rabbi, Natasha Ironside, Naqib Sad Pathan, John A. Ozolek, Rajendra Singh, Liron Pantanowitz, and Gustavo K. Rohde",
          venue: "<em>Cytometry Part A</em>, vol. 107, no. 3, pp. 195–207, 2025.",
          badge: "Cytometry 2025",
          links: [
            { label: "DOI", url: "https://doi.org/10.1002/cyto.a.24917" },
          ],
        },

        {
          title: "Heart Rate Estimation from Wrist PPG Signal During Intense Physical Exercise",
          authors: "Kamrul Hasan, Mehdi Hasan Chowdhury, Naqib Sad Pathan, and Quazi Delwar Hossain",
          venue: "<em>SN Computer Science</em>, vol. 4, no. 6, art. 764, 2023.",
          badge: "SNCS 2023",
          links: [
            { label: "DOI", url: "https://doi.org/10.1007/s42979-023-02173-6" },
          ],
        },

        {
          title: "Multistage Adaptive Noise Cancellation Scheme for Heart Rate Estimation From PPG Signal Utilizing Mode Based Decomposition of Acceleration Data",
          authors: "Md. Toky Foysal Talukdar, Naqib Sad Pathan, Shaikh Anowarul Fattah, Muhammad Quamruzzaman, and Mohammad Saquib",
          venue: "<em>IEEE Access</em>, vol. 10, pp. 41819–41834, 2022.",
          badge: "IEEE Access",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/ACCESS.2022.3168742" },
          ],
        },

      ],
    },

    {
      name: "Preprints & Working Papers",
      papers: [

        {
          title: "3D Transport-Based Morphometry (3D-TBM) for Medical Image Analysis",
          authors: "Hongyu Kan, Kristofor E. Pas, Ivan Medri, Naqib Sad Pathan, Natasha Ironside, Shinjini Kundu, Jingjia He, and Gustavo K. Rohde",
          venue: "<em>arXiv:2602.07260 [eess.IV]</em>, 2026.",
          badge: "arXiv 2026",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2602.07260" },
          ],
        },

        {
          title: "The Radon Signed Cumulative Distribution Transform and Its Applications in Classification of Signed Images",
          authors: "Le Gong, Shiying Li, Naqib Sad Pathan, Mohammad Shifat-E-Rabbi, Gustavo K. Rohde, Abu Hasnat Mohammad Rubaiyat, and Sumati Thareja",
          venue: "<em>arXiv:2307.15339 [cs.CV]</em>, 2023.",
          badge: "arXiv 2023",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2307.15339" },
          ],
        },

      ],
    },

    {
      name: "Conference Proceedings",
      papers: [

        {
          title: "Classification of Breast Tumor Using Radon Cumulative Distribution Transform Nearest Subspace Classifier",
          authors: "Samiha Ahmed, Munmun Jahan, Naqib Sad Pathan, and Quazi Delwar Hossain",
          venue: "<em>IEEE International Conference on Electrical, Computer and Communication Engineering (ECCE)</em>, 2023.",
          badge: "IEEE ECCE 2023",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/ecce57851.2023.10101642" },
          ],
        },

        {
          title: "Recognition of Bengali Handwritten Digits Using Spiking Neural Network Architecture",
          authors: "Shantanu Bhattacharjee, Md Belal Uddin Sifat, Jayeed Bin Kibria, Naqib Sad Pathan, and Nur Mohammad",
          venue: "<em>IEEE International Conference on Electrical, Computer and Communication Engineering (ECCE)</em>, 2023.",
          badge: "IEEE ECCE 2023",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/ecce57851.2023.10101535" },
          ],
        },

        {
          title: "Static Hand Gesture Recognition by RCDT Classifier",
          authors: "Kamrul Hasan, Mehdi Hasan Chowdhury, Naqib Sad Pathan, Aditta Chowdhury, and Quazi Delwar Hossain",
          venue: "<em>12th International Conference on Electrical and Computer Engineering (ICECE)</em>, 2022.",
          badge: "IEEE ICECE 2022",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/icece57408.2022.10088476" },
          ],
        },

        {
          title: "Retinal Blood Vessels Segmentation from Fundus Images Using U-Net",
          authors: "Md Belal Uddin Sifat, Jayeed Bin Kibria, Shantanu Bhattacharjee, Naqib Sad Pathan, and Nur Mohammad",
          venue: "<em>12th International Conference on Electrical and Computer Engineering (ICECE)</em>, 2022.",
          badge: "IEEE ICECE 2022",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/icece57408.2022.10088787" },
          ],
        },

        {
          title: "Early Detection of Sepsis in Critical Patients Using Random Forest Classifier",
          authors: "Fahim Mahmud, Naqib Sad Pathan, and Muhammad Quamruzzaman",
          venue: "<em>IEEE Region 10 Symposium (TENSYMP)</em>, 2020.",
          badge: "IEEE TENSYMP 2020",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/tensymp50017.2020.9231011" },
          ],
        },

        {
          title: "A Machine Learning Based Human Activity Recognition During Physical Exercise Using Wavelet Packet Transform of PPG and Inertial Sensors Data",
          authors: "Naqib Sad Pathan, Md. Toky Foysal Talukdar, Muhammad Quamruzzaman, and Shaikh Anowarul Fattah",
          venue: "<em>4th International Conference on Electrical Information and Communication Technology (EICT)</em>, 2019.",
          badge: "IEEE EICT 2019",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/eict48899.2019.9068768" },
          ],
        },

        {
          title: "Efficient Mental Arithmetic Task Classification Using Wavelet Domain Statistical Features and SVM Classifier",
          authors: "Naqib Sad Pathan, Mahir Foysal, and Md. Mahbubul Alam",
          venue: "<em>International Conference on Electrical, Computer and Communication Engineering (ECCE)</em>, 2019.",
          badge: "IEEE ECCE 2019",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/ecace.2019.8679403" },
          ],
        },

        {
          title: "Optic Disc Segmentation Using Superpixel Based Features and Random Forest Classifier",
          authors: "Md. Saifullah Siddiquee and Naqib Sad Pathan",
          venue: "<em>4th International Conference on Electrical Information and Communication Technology (EICT)</em>, 2019.",
          badge: "IEEE EICT 2019",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/eict48899.2019.9068827" },
          ],
        },

        {
          title: "Design of a Low-Power Ultra High Speed Dynamic Latched Comparator in 90-nm CMOS Technology",
          authors: "Fazle Rabbi, Sajan Das, Quazi Delwar Hossain, and Naqib Sad Pathan",
          venue: "<em>International Conference on Computer, Communication, Chemical, Material and Electronic Engineering (IC4ME2)</em>, 2018.",
          badge: "IEEE IC4ME2 2018",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/ic4me2.2018.8465625" },
          ],
        },

        {
          title: "Motor Imagery EEG Signal Classification Scheme Based on Autoregressive Reflection Coefficients",
          authors: "Md. Toky Foysal Talukdar, Shahnewaz Karim Sakib, Naqib Sad Pathan, and Shaikh Anowarul Fattah",
          venue: "<em>International Conference on Informatics, Electronics & Vision (ICIEV)</em>, 2014.",
          badge: "IEEE ICIEV 2014",
          links: [
            { label: "DOI", url: "https://doi.org/10.1109/iciev.2014.6850812" },
          ],
        },

      ],
    },

  ],
};
