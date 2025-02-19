import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CodingGita',
    description: 'CodingGita Design',
    image: 'data:image/png;base64,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',
    live: 'https://www.figma.com/design/tcB5OruG6ahWCiy5s1OPAc/Codinggita?node-id=0-1&t=rv9ocXpkY8JIpEDc-1',
    tags: ['Figma']
  },
  {
    title: 'CarsInfo',
    image: 'https://res.cloudinary.com/doqzxuxb1/image/upload/v1739942691/xmztzbi37w4xpgtnxu6d.png',
    github: 'https://github.com/JatinRajvani/Tata-Motors-Clone',
    live: 'https://www.figma.com/design/iBahOK4dy25NUX8PF3ti2z/CarsInfo?node-id=0-1&t=eDulEAGNvwgEWPlQ-1',
    tags: ['Figma']
  },
  {
    title: 'Homy',
    image: 'https://res.cloudinary.com/doqzxuxb1/image/upload/v1739942957/ezkwfhgbsnoxg1o9y2bp.png',
    live: 'https://www.figma.com/design/R2f2wshOqW1dTsLohjxesv/Homey?node-id=0-1&t=T8bDK9x2yZOmldBh-1',
    tags: ['Figma']
  },
  {
    title: 'Instagram Design',
    image: 'data:image/jpeg;base64,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',
    live: 'https://www.figma.com/design/vPRKmpSoGWCTAHKOET5IpA/Instagram?node-id=0-1&t=Cqple8M80c0cYWRm-1',
    tags: ['Figma']
  },
  {
    title: 'Netflix Landing Page Design',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAkFBMVEX////lCRTkAAD3zM3rXGD+9PT86urypKX51dbxmpz74eLlAA71srT3x8jnIyrtdnj2vsD+8/Twj5LviozlAArzrK34zs/3w8T/+vv51NXxlJf63N31t7jpREjtcHP97u/ugIPoOT7mFB3nMTfvhIbrYWTpQUbmICfqUlbympzpS0/rX2LoNTrsZ2vnKjHmExw86JdzAAAHLklEQVR4nO2ca3uiOhCAMd5BixdUvFXbWtd2W8///3enKJCZZECE0G3zzPtpl0QgbyEkk4vjMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAxTG82UYYhT5jKpJ4+Gw2Yuwzifm5/twu6atX3/KdV7xXTIjPAqrvKLdbPoue9BSEY4xZMpJ3Df4gbxnU1v5ZMXXBY85QocGueVqQ8yttOjW3D0nG1BPJTRSCIaCaKFUx48KqUjf0CSiJjcyBdlXVyz9gqesg/uNddtF2SUbkfgMmKNfrCBSZtyIgngWdsoxTa3jvDk4T36wVOQpnhBKY0k0G0XpVjndgrLCvPDGxD9kiIJwGmDD5RinVs3683/FPrFTADLJdDn0zq3zlG++sG7PLyDav3SJnWQ2wlMsc/tAErspIdRXaG2zqoAy+U9wxT73KKPi3yOwDcOPs7VQeUSS5Biodu9TPC85CB6mhcVVGpgt7C2sdDtmtJ4Bg2wZ+Js5UHl8mDT5Lbbwv2yBv2buF/WK3jK6m6dF+kxKdQ8uxVaFfzMwH7vTbditevoxPnG8sgOlrUJssbOgFuxyTmlAbddKPIazmjV1ABzNLfA4m23Rf/KoEajvsPQ7VBPTjHgNtR6Ceg93BcsUEGUug7ci41uYTfhWrke6HaZEVS3szTFSreodp0rD/KJPl1pFLfBU5pipVvnGQRsHpUKuFmwPEVR2z/yvbDTbR/KDJ0/UrX3p2BxCqO5XSUpdrpFwYMZqiJm5MkqoLqVzWc73cI2V7D9Cz5tgjpVJbQ+UdrvtdTtAkZVZVeiIaYFS1Mc3e0+TrHULQzNoHLvCpamOJrb9N2w1S0d6RCvBQtzB/qFkn6vrW7paBMKARqCcBv/BW1167yDWjZBGc8yA/FHjO/HWrcbqsyDgmW5B+o614aetW6Jr1kNDTCHdBtsLym33fqj0WgQMbvQzYrQFXerxW/hKY253WuFlj0mk1AV+7Xfe39sPKvAd7hV76QWt2vdbe75ykK6fYtS7h7T+TVunQ/laxZFbWqAKtc1amGx25kaWV1TuSpDN/aiSaEWuw3xFYPjDUklgb1reUd7x2q3ziO6pDo71hQgKvSa/vvSJLHZLYwtNrxGvqLSgNs4yMGkaPDeZregcA2jUxcR4Db2cvZv1O+12i2aumh4CDIFdgXgf0Kr3cLRB9MzPiTILagUBsXdejEm3H5LvwxPXWwE6uoHUyC3Mib/1e8t3C+LvAbPf4Ks9++eeMJqMYKgtQcG3eKIguiRmSqD3IJrivbZ2liN2ncwOqEZgN36slLoftjr9qz2eQsW5E6w26Zs4h7tddvEj21N0VvVreOlQmED0DK3LdUtmE1kEsXtQb2shW6Jpo7RZQ4piluyrWmZWz00XsfkBEdzCydIWeo2JB6fusd0rm5XxJXtctslX806QmGqW9d6t/9R82qMz72NUN1qbT/b3C6ox7aegI3mlnhlrHJLzfyIMtYw0qu5pVooFrlFdR74dx0Bcs2ts9X+sDa59YFPgbaryLt0OXS36iCoVW7b0OYn/LjUMJFRd9v+DW5zr5fjFi13WOKlJMbnf+hu9e72HW53VOfRvNvg9OlPJ/3ZZtRcu9qk5By3Ml7SCF6Ux9j48APhVpvnl+U2mpPXdnvDzWx18Fvbl4Y6UhBj3m0jwMMT3vl4+kwzZrtFFWwUeIdr+Wpcp5O61TqFGW69hzMsYhBEz8Q3uVXwvK87STNmuwU7f1y7uUNcR5iFcIsGQXPcRgNlWin/jdvLb9OMxdb4Xya9OSCWanz4gXKrdl3K7J8A+TFu4XSaOAXGTwwvQyfdqpN/bXE7hh4f9fKYXr1HuvVxKWxxi57RZOriCbQ+DA8/kG6bdrqFm/5sk4M5WwlWhXSrjt/b4RZt+iPjtdlbCVaFdouHzYy59TzKLdxHtE63YLMaGJkBc2wMDz/QbntG3c5kG59y6x6mCYe8lxLu0XptT+O3K81Iu83a9CdzK8HK0G7hFg4F3HqB7EQQbne9dWfcDsOKTZzxer2cLzaDWferG+i33j/OePpYmpF2+wodwlsBHQpR095ryC1a9Eq59WCXrPH0/rqfvs02i2U9KweyaXfWy8Vm9jbdy5vsXh5rD7tFjS3US8jYSrA6GW7dbLfxG3lsPU7eBqO5W9fs1fKs3yZ+a3t9qFO32bsuoj1rTA4/ZLhFFT8cqBuvBsNeJ2vG4s8i7KwXycsfJnMuo5IqA49+TV+zLLd9kb70D6daVg1+L+3lYrbyW9foktIaQROADQ4/ZLntiJfWvj+Yu4b72P+c0F1qM+vg8MNfc5cCbutZHPgb6CafvobR4YevGih+9Y91LVf5+YQT/z1tgZvTIMRza99duL/j61QnoTvsTl8fhLmvmXX1aWU6bIRhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZh6uN/G+9+HoK7+qQAAAAASUVORK5CYII=',
    live: 'https://www.figma.com/design/YtD35jn7eLsVPlwupYKANG/Untitled?node-id=0-1&t=dHfcKkgfMRzSwbeM-1',
    tags: ['Figma']
  }
];

const FigmaProjects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
        FigmaProjects
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="relative h-48">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-sm px-3 py-1 bg-gray-700/50 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FigmaProjects;