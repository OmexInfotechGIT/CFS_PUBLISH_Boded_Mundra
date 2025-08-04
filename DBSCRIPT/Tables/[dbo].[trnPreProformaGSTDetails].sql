USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProformaGSTDetails]    Script Date: 04/09/2024 6:06:17 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProformaGSTDetails](
	[trnPreProformaGSTDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaID] [int] NOT NULL,
	[TableName] [varchar](255) NULL,
	[TableInfoID] [varchar](255) NULL,
	[TaxGrouID] [int] NULL,
	[TaxTypeID] [int] NULL,
	[TaxTypeName] [varchar](255) NULL,
	[TaxPer] [money] NULL,
	[TotalTax] [money] NULL,
	[HSNSACCode] [varchar](255) NULL,
	[StateName] [varchar](255) NULL,
	[StateID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProformaGSTDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProformaGSTDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


