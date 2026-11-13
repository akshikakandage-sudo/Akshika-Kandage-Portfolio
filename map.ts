// @ts-nocheck
// The world map is drawn once at build time, so visitors download no mapping library.
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import topo from 'world-atlas/countries-110m.json';

const proj = geoNaturalEarth1().fitSize([1000, 520], { type: 'Sphere' });
const path = geoPath(proj);
export const sphere = path({ type: 'Sphere' });
export const countries = feature(topo, topo.objects.countries).features
  .filter((f) => String(f.id) !== '010')
  .map((f) => ({ id: String(f.id).padStart(3, '0'), d: path(f) }));
export const pt = (lon: number, lat: number) => proj([lon, lat]);
