import re

import tqdm
from pub_crawler import Scholar, AnalyzeDraw, Errors
from selenium.webdriver.common.by import By

class Scholar(Scholar):
    def extract_abstract(self):
        """Extract abstract content from the current page"""
        abstract_elements = self.driver.find_elements(by=By.CLASS_NAME, value='gs_rs.gs_fma_s')
        abstracts = []

        for element in abstract_elements:
            abstract_html = element.get_attribute('innerHTML')
            abstract = re.sub(r'<br>', '', abstract_html)  # Removing <br> tags
            abstracts.append(abstract)

        return abstracts
def __search_onepage(self):
    """爬取当前页面文章的信息，包括标题、作者、发表年份、链接和摘要"""
    results = []

    if not self.check_element_exist(check_type='ID', value='gs_res_ccl_mid'):
        print('>> 当前页面不存在文章列表')
        return []

    gs_scl = self.driver.find_element(by=By.ID, value='gs_res_ccl_mid').find_elements(by=By.CLASS_NAME, value='gs_scl')
    for i, item in tqdm(enumerate(gs_scl)):
        gs_rt = item.find_element(by=By.CLASS_NAME, value='gs_rt')
        gs_a = item.find_element(by=By.CLASS_NAME, value='gs_a')
        gs_rt_a = gs_rt.find_element(by=By.TAG_NAME, value='a') if self.check_element_exist(check_type='TAG_NAME', value='a', source=gs_rt.get_attribute('innerHTML')) else None
        publisher_info = gs_a.text.strip().replace('\n', '')
        title = gs_rt.text.strip().replace('\n', '').split(']')[-1].strip()
        href = gs_rt_a.get_attribute('href') if gs_rt_a else ''
        year = re.findall(r'\d{4}', publisher_info)
        year = year[-1] if year else -1

        # Extracting abstract content
        abstract_element = item.find_element(by=By.CLASS_NAME, value='gs_rs.gs_fma_s')
        abstract_html = abstract_element.get_attribute('innerHTML')
        abstract = re.sub(r'<br>', '', abstract_html)  # Removing <br> tags

        results.append({'title': title, 'href': href, 'year': year, 'abstract': abstract})
    return results


if __name__ == "__main__":

    # 读取文章标题和URL
    with open('ccf-a.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()

    papers = []

    for line in lines:
        if line != "注：": # 跳过“注：”后面的内容。
            break
        if line.strip():  # 检查行是否非空
            papers.append({'title': line, 'url': ''})  # 添加到列表

    # 通过谷歌学术获取对应的URL
    scholar = Scholar('./')  # 使用你的output文件夹路径
    scholar.start_browser()

    for paper in papers:
        paper['url'] = scholar.get_first_result_url(paper['title'])
        paper['abstract'] = scholar.extract_abstract(paper['title'])


    scholar.close_browser()

    # TODO：获取每篇文章的bibtex
    # TODO: 增加html, abstract到这个bib
    # TODO: 写入同一个*.bib文件


    # # 将结果写入到output.txt
    with open('output.txt', 'w', encoding='utf-8') as output_file:
        output_file.write('\n'.join(output_lines))

    # TODO: 交给GPT，增加abbr，也就是出版刊物的缩写e.g. TMC'23