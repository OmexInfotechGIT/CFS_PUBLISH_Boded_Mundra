USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProformaOtherTerrifDetails]    Script Date: 04/09/2024 4:41:05 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProformaOtherTerrifDetails](
	[trnPreProformaOtherTerrifDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaID] [int] NULL,
	[TarrifHead] [varchar](255) NULL,
	[TarrifHeadID] [int] NULL,
	[QTY] [decimal](10, 2) NOT NULL,
	[Rate] [decimal](10, 2) NOT NULL,
	[Total] [decimal](10, 2) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[IsFinished] [bit] NOT NULL,
	[Discountamt] [decimal](10, 2) NOT NULL,
	[Netamount] [decimal](10, 2) NOT NULL,
	[GSTPer] [decimal](10, 2) NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  CONSTRAINT [DF_trnPreProformaOtherTerrifDetails_QTY]  DEFAULT ((0)) FOR [QTY]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  CONSTRAINT [DF_trnPreProformaOtherTerrifDetails_Rate]  DEFAULT ((0)) FOR [Rate]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  CONSTRAINT [DF_trnPreProformaOtherTerrifDetails_Total]  DEFAULT ((0)) FOR [Total]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  CONSTRAINT [DF_trnPreProformaOtherTerrifDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  CONSTRAINT [DF_trnPreProformaOtherTerrifDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  DEFAULT ((0)) FOR [Discountamt]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  DEFAULT ((0)) FOR [Netamount]
GO

ALTER TABLE [dbo].[trnPreProformaOtherTerrifDetails] ADD  DEFAULT ((0)) FOR [GSTPer]
GO


