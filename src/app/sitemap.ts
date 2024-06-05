import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ritualcompass.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ritualcompass.com/cemetery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.ritualcompass.com/morgue',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://www.ritualcompass.com/about',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/search-for-ritual-companies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/free-consultation',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/what-to-do-if-someone-dies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/select-a-monument',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/funeral-services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/select-a-cemetery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.ritualcompass.com/about/registration-of-the-certificate',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    } 
  ]
}