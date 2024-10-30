import Autonav from './Converter/Block/Autonav';
import Content from './Converter/Block/Content';
import DateNavigation from './Converter/Block/DateNavigation';
import ExpressEntryDetail from './Converter/Block/ExpressEntryDetail';
import ExpressEntryList from './Converter/Block/ExpressEntryList';
import ExpressForm from './Converter/Block/ExpressForm';
import Faq from './Converter/Block/Faq';
import Feature from './Converter/Block/Feature';
import File from './Converter/Block/File';
import Form from './Converter/Block/Form';
import HorizontalRule from './Converter/Block/HorizontalRule';
import Html from './Converter/Block/Html';
import ImageSlider from './Converter/Block/ImageSlider';
import ManualNav from './Converter/Block/ManualNav';
import NextPrevious from './Converter/Block/NextPrevious';
import PageAttributeDisplay from './Converter/Block/PageAttributeDisplay';
import PageList from './Converter/Block/PageList';
import PageTitle from './Converter/Block/PageTitle';
import Search from './Converter/Block/Search';
import ShareThisPage from './Converter/Block/ShareThisPage';
import SocialLinks from './Converter/Block/SocialLinks';
import Survey from './Converter/Block/Survey';
import SwitchLanguage from './Converter/Block/SwitchLanguage';
import Tags from './Converter/Block/Tags';
import Testimonial from './Converter/Block/Testimonial';
import TopicList from './Converter/Block/TopicList';
import Video from './Converter/Block/Video';
import WhaleChart from './Converter/Block/WhaleChart';
import WhaleCounter from './Converter/Block/WhaleCounter';
import WhaleCta from './Converter/Block/WhaleCta';
import WhaleGallery from './Converter/Block/WhaleGallery';
import WhaleImageSlider from './Converter/Block/WhaleImageSlider';
import WhaleManualNav from './Converter/Block/WhaleManualNav';
import WhalePricingTable from './Converter/Block/WhalePricingTable';

export interface Converter
{
  convert: (doc: XMLDocument) => void;
}

const Converters: ReadonlyArray<Converter> = [
  new Autonav(),
  new Content(),
  new DateNavigation(),
  new ExpressEntryDetail(),
  new ExpressEntryList(),
  new ExpressForm(),
  new Faq(),
  new Feature(),
  new File(),
  new Form(),
  new HorizontalRule(),
  new Html(),
  new ImageSlider(),
  new ManualNav(),
  new NextPrevious(),
  new PageAttributeDisplay(),
  new PageList(),
  new PageTitle(),
  new Search(),
  new ShareThisPage(),
  new SocialLinks(),
  new Survey(),
  new SwitchLanguage(),
  new Tags(),
  new Testimonial(),
  new TopicList(),
  new Video(),
  new WhaleChart(),
  new WhaleCounter(),
  new WhaleCta(),
  new WhaleGallery(),
  new WhaleImageSlider(),
  new WhaleManualNav(),
  new WhalePricingTable(),
];

export default Converters;
