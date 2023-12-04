import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ElementsDesignMiddleBlock extends Schema.Component {
  collectionName: 'components_elements_design_middle_blocks';
  info: {
    displayName: 'Design-MiddleBlock';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    lSubTitle1: Attribute.String;
    lDesc1: Attribute.Text;
    rDesc: Attribute.Text;
    lSubTitle: Attribute.String;
  };
}

export interface ElementsEcommerceMiddleBlock extends Schema.Component {
  collectionName: 'components_elements_ecommerce_middle_blocks';
  info: {
    displayName: 'ecommerce-middle-block';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    rDesc: Attribute.Text;
    lSubTitle: Attribute.String;
    rSubTitle: Attribute.String;
  };
}

export interface ElementsFooter extends Schema.Component {
  collectionName: 'components_elements_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'elements.services', true>;
    Title: Attribute.String;
    Desc: Attribute.Text;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Email: Attribute.Email;
    Phone: Attribute.BigInteger;
    Subject: Attribute.String;
    Message: Attribute.Text;
    Submit: Attribute.String;
    Title: Attribute.String;
    lSubTitle: Attribute.String;
    rSubTitle: Attribute.String;
    Address: Attribute.Text;
  };
}

export interface ElementsGallary extends Schema.Component {
  collectionName: 'components_elements_gallaries';
  info: {
    displayName: 'gallary';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
    bottom_title: Attribute.String;
  };
}

export interface ElementsHeader extends Schema.Component {
  collectionName: 'components_elements_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'elements.services', true>;
    Title: Attribute.String;
    titleImage: Attribute.Media;
    logo: Attribute.Media;
  };
}

export interface ElementsHeading extends Schema.Component {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    MiddleBlock: Attribute.Component<'elements.middle'>;
    SideBlock: Attribute.Component<'elements.side-block'>;
    Gallery: Attribute.Component<'elements.gallary'>;
    Header: Attribute.Component<'elements.home-header', true>;
  };
}

export interface ElementsHomeHeader extends Schema.Component {
  collectionName: 'components_elements_home_headers';
  info: {
    displayName: 'homeHeader';
  };
  attributes: {
    Title: Attribute.String;
    subTitle: Attribute.String;
    home: Attribute.Media;
  };
}

export interface ElementsHybridMiddleBlock extends Schema.Component {
  collectionName: 'components_elements_hybrid_middle_blocks';
  info: {
    displayName: 'Hybrid-MiddleBlock';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    rDesc: Attribute.Text;
    rSubTitle: Attribute.String;
    lSubTitle: Attribute.String;
    rDesc1: Attribute.Text;
  };
}

export interface ElementsICard extends Schema.Component {
  collectionName: 'components_elements_i_cards';
  info: {
    displayName: 'iCard';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsLabMidddleBlock extends Schema.Component {
  collectionName: 'components_elements_lab_midddle_blocks';
  info: {
    displayName: 'Lab-MidddleBlock';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    rDesc: Attribute.Text;
    rSubTitle: Attribute.String;
    rDesc1: Attribute.Text;
    lSubTitle: Attribute.String;
  };
}

export interface ElementsMiddleBlock extends Schema.Component {
  collectionName: 'components_elements_middle_blocks';
  info: {
    displayName: 'MiddleBlock';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    rDesc: Attribute.Text;
    lSubTitle: Attribute.String;
    rSubTitle: Attribute.String;
  };
}

export interface ElementsMiddle extends Schema.Component {
  collectionName: 'components_elements_middles';
  info: {
    displayName: 'middle';
    description: '';
  };
  attributes: {
    bottom_title: Attribute.String;
    description: Attribute.Text;
    Title: Attribute.String;
  };
}

export interface ElementsNavbar extends Schema.Component {
  collectionName: 'components_elements_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    Title: Attribute.String;
    content: Attribute.JSON;
  };
}

export interface ElementsPortals extends Schema.Component {
  collectionName: 'components_elements_portals';
  info: {
    displayName: 'Portals';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsServices extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    Content: Attribute.JSON;
    content_title: Attribute.String;
  };
}

export interface ElementsSideBlock extends Schema.Component {
  collectionName: 'components_elements_side_blocks';
  info: {
    displayName: 'side_block';
  };
  attributes: {
    img_url: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ElementsTopBlock extends Schema.Component {
  collectionName: 'components_elements_top_blocks';
  info: {
    displayName: 'top_block';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bottom_title: Attribute.Blocks;
  };
}

export interface ElementsWebProductMiddleBlock extends Schema.Component {
  collectionName: 'components_elements_web_product_middle_blocks';
  info: {
    displayName: 'webProduct-middle-block';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    lDesc: Attribute.Text;
    rDesc: Attribute.Text;
    lSubTitle: Attribute.String;
    rSubTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.card': ElementsCard;
      'elements.design-middle-block': ElementsDesignMiddleBlock;
      'elements.ecommerce-middle-block': ElementsEcommerceMiddleBlock;
      'elements.footer': ElementsFooter;
      'elements.form': ElementsForm;
      'elements.gallary': ElementsGallary;
      'elements.header': ElementsHeader;
      'elements.heading': ElementsHeading;
      'elements.home-header': ElementsHomeHeader;
      'elements.hybrid-middle-block': ElementsHybridMiddleBlock;
      'elements.i-card': ElementsICard;
      'elements.lab-midddle-block': ElementsLabMidddleBlock;
      'elements.middle-block': ElementsMiddleBlock;
      'elements.middle': ElementsMiddle;
      'elements.navbar': ElementsNavbar;
      'elements.portals': ElementsPortals;
      'elements.services': ElementsServices;
      'elements.side-block': ElementsSideBlock;
      'elements.top-block': ElementsTopBlock;
      'elements.web-product-middle-block': ElementsWebProductMiddleBlock;
    }
  }
}
