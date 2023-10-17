def generate_bibtex(abstract, abbr, html):
    bibtex += f"  html={{ {html} }}\n"
    bibtex += f"  abstract={{ {abstract} }},\n"
    bibtex += f"  abbr={{ {abbr} }},\n"
    bibtex += f"  selected={{ {True} }},\n"
    bibtex += "}"
    return bibtex

# 示例调用
title = "Fast Packet Loss Inferring via Personalized Simulation-Reality Distillation"
authors = "Xu, Wenchao and Wan, Haodong and Wang, Haozhao and Cheng, Nan and Chen, Quan and Zhou, Haibo and Guo, Song"
journal = "IEEE Transactions on Mobile Computing"
year = "2023"
publisher = "IEEE"
selected = "true"
abstract = "In a complete theory there is an element corresponding to each element of reality. ..."
abbr = "TMC'23"
doi = "10.1103/PhysRev.47.777"
url = "http://link.aps.org/doi/10.1103/PhysRev.47.777"
html = "https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777"

bibtex_entry = generate_bibtex(title, authors, journal, year, publisher, selected, abstract, abbr, doi, url, html)
print(bibtex_entry)
