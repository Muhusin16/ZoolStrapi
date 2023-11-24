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
    subTitle: Attribute.String;
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

export interface ElementsServices extends Schema.Component {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    Content: Attribute.JSON;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.card': ElementsCard;
      'elements.ecommerce-middle-block': ElementsEcommerceMiddleBlock;
      'elements.footer': ElementsFooter;
      'elements.form': ElementsForm;
      'elements.gallary': ElementsGallary;
      'elements.header': ElementsHeader;
      'elements.heading': ElementsHeading;
      'elements.home-header': ElementsHomeHeader;
      'elements.i-card': ElementsICard;
      'elements.middle': ElementsMiddle;
      'elements.services': ElementsServices;
      'elements.side-block': ElementsSideBlock;
      'elements.top-block': ElementsTopBlock;
    }
  }
}
