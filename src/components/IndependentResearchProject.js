import React from 'react';

const IndependentResearchProject = ({section}) => {
    return (
      <section className="content">
        <h2 className="copy">Independent Research Project</h2>
        <p>
          Additionally, all students are encouraged to participate in a
          research-focused “HiFiAssembler” project aimed at genome assembly using the newly emerged:&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pacb.com/smrt-science/smrt-sequencing/hifi-reads-for-highly-accurate-long-read-sequencing/"
            className="animated-link"
          >
            HiFi technology
          </a>
          &nbsp;based on long and accurate reads. The genome assembly problem amounts to
          assembling a genome from a myriad of its error-prone and overlapping fragments, the largest
          jigsaw puzzle ever assembled by humans. Using overlaps between these short fragments (called
          reads), you need to reconstruct the genome.
        </p>
        <p>
          The HiFi technology, developed in 2019, is revolutionizing the way we sequence the genomes –
          it already contributed to the COMPLETE human genome assembly by the&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pacb.com/smrt-science/smrt-sequencing/hifi-reads-for-highly-accurate-long-read-sequencing/"
            className="animated-link"
          >
            Telomere-To-Telomere
          </a>
          &nbsp;consortium in Fall 2020, the problem that remained unsolved since 2000 when the
          DRAFT human genome was first assembled by the&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.genome.gov/human-genome-project"
            className="animated-link"
          >
            Human Genome Project
          </a>
          . See a short video explaining the benefits of HiFi technology:
        </p>
        <div className="video-wrapper">
          <iframe
            title="YouTube video for HiFi"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DDbeyf1FEEU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p>
          However, assembly of HiFi reads remains a poorly explored area with many open questions –
          there are still only three HiFi assemblers and they all were developed very recently:
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://genome.cshlp.org/content/early/2020/08/14/gr.263566.120"
              className="animated-link"
            >
              HiCanu
            </a>
            &nbsp;(Nurk et al., Genome Research 2020)
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://arxiv.org/abs/2008.01237"
              className="animated-link"
            >
              Hifiasm
            </a>
            &nbsp;(Cheng et al., arxiv 2020)
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nature.com/articles/s41592-020-00971-x"
              className="animated-link"
            >
              Flye in the HiFi mode
            </a>
            &nbsp;(Kolmogorov et al., Nature Methods 2020)
          </li>
        </ul>
        <p>
          We will summarize these open questions and will invite you to develop a new HiFi assembler
          from scratch and address these questions. You will be provided with the sets of HiFi reads for E.
          coli, fruit fly, and the human X chromosome. Your goal is to assemble these reads, evaluate the
          quality of assembly, and prepare a short power point presentation (maximum 10 pages)
          outlining your approach and summarizing your results. The submitted assemblers will be
          evaluated (based on the assembly quality, the running time, and the originality of the approach)
          and the winning assembly team will make a short presentation for the entire multi-university
          class.
        </p>
        <p>
          The participation in the HiFi assembly project is voluntary but if you are interested, we
          encourage you to form multi-university teams working on the HiFiAssembler project (to
          promote interactions between students from different universities) but teams from a single
          university are also OK. However, we suggest that each team includes at most 2-3 students from
          the same university (but you can have more students in a multi-university team).
        </p>
      </section>
    );
}

export default IndependentResearchProject;
